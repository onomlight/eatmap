/* ===========================
   뭐먹지 - 메인 스크립트
   =========================== */

const WISH_LIST_KEY = 'eatmap_wish_list';

// 찜 목록 가져오기
function getWishList() {
    const list = localStorage.getItem(WISH_LIST_KEY);
    return list ? JSON.parse(list) : [];
}

// 찜 토글 (추가/삭제)
function toggleWish(bizName) {
    let list = getWishList();
    const index = list.indexOf(bizName);
    if (index > -1) {
        list.splice(index, 1);
    } else {
        list.push(bizName);
    }
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(list));
    return index === -1; // 추가되었으면 true
}

// 하트 상태 업데이트 함수 (페이지 로드 시 또는 리스트 렌더링 후 호출)
function updateWishStatus() {
    const list = getWishList();
    $(".wish-btn").each(function() {
        const bizName = $(this).data("name");
        if (list.includes(bizName)) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {
    // 이미지 슬라이더 초기화 (메인페이지 전용)
    if ($(".slick").length > 0) {
        $(".slick").slick({
            arrow: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            prevArrow: "",
            nextArrow: "",
            slidesToShow: 1,
            fade: true,
            cssEase: "ease-in-out",
            speed: 600,
        });
    }

    // 찜 버튼 클릭 이벤트 (이벤트 위임으로 동적 생성 카드 대응)
    $(document).on("click", ".wish-btn", function(e) {
        e.preventDefault();
        e.stopPropagation(); // 카드 전체 클릭 시의 이동 이벤트 방지
        
        const bizName = $(this).data("name");
        const isAdded = toggleWish(bizName);
        
        if (isAdded) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });

    // 상단 검색창 공통 로직 (03mapping.html 결과 페이지로 쿼리 전달)
    $(".srch_area form").submit(function(e) {
        // 03mapping.html 내부의 자체 검색 폼인 경우 무시 (혹은 통합 처리)
        if (location.pathname.includes("03mapping.html")) return;
        
        e.preventDefault();
        const query = $(this).find("input[name='query']").val();
        if (query && query.trim()) {
            location.href = `./03mapping.html?q=${encodeURIComponent(query)}`;
        }
    });

    // --- 공통 모달 관련 로직 ---
    
    // 모달 HTML 구조 동적 삽입
    if ($(".modal-overlay").length === 0) {
        $("body").append(`
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-close">&times;</div>
                    <div class="modal-img">
                        <img src="img/logo.png" alt="로고">
                    </div>
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-tag">분류</div>
                            <h2 class="modal-title">식당 이름</h2>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li class="modal-menu"><strong>대표메뉴</strong> <span>메뉴 정보</span></li>
                                <li class="modal-addr"><strong>주소</strong> <span>주소 정보</span></li>
                                <li class="modal-time"><strong>영업시간</strong> <span>시간 정보</span></li>
                                <li class="modal-desc"><strong>상세설명</strong> <span>설명 정보</span></li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <a href="#" target="_blank" class="modal-map-link btn-search-recommend" style="display:block; text-align:center; text-decoration:none;">지도에서 길찾기</a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    // --- 데이터 형식 통일화 유틸리티 (대구, 행안부 조회서비스, 전국 표준 데이터 대응) ---
    window.mapToUnifiedFormat = function(item) {
        if (!item) return null;
        
        // 1. 대구 API 및 기존 data.json 형식 (BZ_NM)
        if (item.BZ_NM) {
            return {
                name: item.BZ_NM,
                address: item.GNG_CS,
                category: item.FD_CS,
                menu: item.MNU,
                phone: item.TLNO || item.UPSO_SITE_TELNO,
                time: item.MBZ_HR || "정보 없음",
                description: item.SMPL_DESC || "상세 정보가 없습니다.",
                source: "daegu"
            };
        }
        
        // 2. 행정안전부 모범음식점 조회서비스 형식 (UPSO_NM)
        if (item.UPSO_NM) {
            return {
                name: item.UPSO_NM,
                address: item.SITE_ADDR_RD || item.SITE_ADDR,
                category: item.SNT_UPTAE_NM,
                menu: item.MAIN_EDF,
                phone: item.UPSO_SITE_TELNO,
                time: "전화문의 요망",
                description: `행정안전부에서 지정한 전국의 모범음식점(${item.UPSO_NM}) 정보입니다.`,
                source: "mois_inquiry"
            };
        }

        // 3. 전국 모범음식점 표준 데이터 형식 (restrntNm - camelCase)
        if (item.restrntNm) {
            return {
                name: item.restrntNm,
                address: item.rdnmadr || item.lnmadr,
                category: item.indutyNm,
                menu: item.mainMenu,
                phone: item.phoneNumber,
                time: "전화문의 요망",
                description: `공공데이터포털 표준 데이터 기준 모범음식점(${item.restrntNm}) 정보입니다.`,
                source: "nationwide_std"
            };
        }
        
        return item; // 알 수 없는 경우 원본 반환
    };

    const $modal = $(".modal-overlay");

    // 모달 열기 함수 (이름으로 찾거나 객체를 직접 전달 가능)
    window.openModal = function(target) {
        if (!target) return;
        
        if (typeof target === 'string') {
            // 이름으로 찾기 (기존 호환성 유지)
            $.getJSON("./data.json", function(data) {
                const rawItem = data.find(i => i.BZ_NM === target || i.UPSO_NM === target);
                if (rawItem) renderModal(rawItem);
            });
        } else {
            // 객체 직접 전달 (성능 최적화)
            renderModal(target);
        }
    };

    function renderModal(rawItem) {
        const item = mapToUnifiedFormat(rawItem);
        if (item) {
            $modal.find(".modal-title").text(item.name);
            $modal.find(".modal-tag").text(item.category);
            $modal.find(".modal-menu span").text(item.menu);
            $modal.find(".modal-addr span").text(item.address);
            $modal.find(".modal-time span").text(item.time);
            $modal.find(".modal-desc span").text(item.description);
            $modal.find(".modal-map-link").attr("href", `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`);
            
            $modal.addClass("active");
            $("body").css("overflow", "hidden"); 
        }
    }

    // 모달 닫기
    function closeModal() {
        $modal.removeClass("active");
        $("body").css("overflow", "auto");
    }

    $modal.on("click", function(e) {
        if ($(e.target).hasClass("modal-overlay") || $(e.target).hasClass("modal-close")) {
            closeModal();
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) closeModal(); // ESC
    });

    // 카드 클릭 시 모달 오픈 (이벤트 위임)
    $(document).on("click", ".pop-card, .card, .list-card, .item", function(e) {
        // 찜 버튼이나 링크 클릭 시에는 무시
        if ($(e.target).closest(".wish-btn, a").length > 0) return;

        let bizName = "";
        
        // 데이터 추출 (이미 정의된 다양한 카드 구조 대응)
        if ($(this).hasClass("pop-card")) {
            bizName = $(this).find(".pop-title").text();
        } else if ($(this).hasClass("card")) {
            bizName = $(this).find(".iteminfo span").text().split("||")[0].trim();
        } else if ($(this).hasClass("item")) {
            bizName = $(this).find("h5").clone().children().remove().end().text().trim(); // markerbg 제외 텍스트
        }
        
        if (bizName) {
            openModal(bizName);
        }
    });

    // 초기 찜 상태 업데이트
    updateWishStatus();

    // ===========================
    // '맨 위로' (Top) 버튼 및 네비게이션 편의기능
    // ===========================
    
    // Top 버튼 HTML 주입
    const topBtnHtml = `
        <div id="btn-top" title="맨 위로 가기">
            <svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
        </div>
    `;
    $('body').append(topBtnHtml);

    // 스크롤 이벤트: Top 버튼 표시/숨김
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#btn-top').css('display', 'flex');
        } else {
            $('#btn-top').fadeOut(200);
        }
    });

    // 클릭 이벤트: 맨 위로 부드럽게 이동
    $('#btn-top').click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 상단 검색창 공통 처리 (03mapping.html로 이동 및 쿼리 전달)
    $(".srch_area form").on("submit", function(e) {
        // 이미 03mapping.html에 있는 경우는 mapapp.js에서 처리하므로 여기서는 무시
        if (window.location.pathname.includes('03mapping.html')) return;
        
        e.preventDefault();
        const query = $(this).find("input[name='query']").val();
        if (query && query.trim()) {
            window.location.href = `03mapping.html?q=${encodeURIComponent(query)}`;
        }
    });
});
