// 마커를 담을 배열입니다
var markers = [];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(35.86719, 128.5961), // 대구 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();  

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

// 페이지 로드 시 URL 파라미터 체크 및 자동 검색
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (query) {
        document.getElementById('keyword').value = query;
        if (document.getElementById('s_word')) {
            document.getElementById('s_word').value = query; // 상단 검색창도 동기화
        }
        searchPlaces();
    } else {
        searchPlaces(); // 기본 검색
    }
});

// 상단 검색창 엔터 시 03mapping.html 내부에서 즉시 검색
$(".srch_area form").submit(function(e) {
    if (window.location.pathname.includes('03mapping.html')) {
        e.preventDefault();
        const query = $(this).find("input[name='query']").val();
        if (query && query.trim()) {
            document.getElementById('keyword').value = query;
            searchPlaces();
            
            // URL 업데이트 (히스토리 기록)
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(query);
            window.history.pushState({path:newUrl},'',newUrl);
        }
    }
});

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {
    var keyword = document.getElementById('keyword').value;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB); 
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
        displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
    } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
    }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {
    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new kakao.maps.LatLngBounds();
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);
    removeMarker();
    
    for ( var i=0; i<places.length; i++ ) {
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
            marker = addMarker(placePosition, i), 
            itemEl = getListItem(i, places[i]); 

        bounds.extend(placePosition);

        (function(marker, title) {
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };
            itemEl.onmouseout =  function () {
                infowindow.close();
            };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
    }
    listEl.appendChild(fragment);
    if (menuEl) menuEl.scrollTop = 0;
    map.setBounds(bounds);

    // 찜 상태 업데이트 (main.js 연동)
    if (typeof updateWishStatus === 'function') updateWishStatus();
}

// 이 함수가 중요: 검색 결과 항목에 찜 버튼 포함
function getListItem(index, places) {
    var el = document.createElement('li');
    var isRoad = places.road_address_name ? true : false;
    
    var itemStr = `
        <button class="wish-btn" data-name="${places.place_name}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        <div class="info">
            <h5><span class="markerbg marker_${index + 1}"></span>${places.place_name}</h5>
            ${isRoad ? `<span class="gray">${places.road_address_name}</span>` : ''}
            <span class="gray">${places.address_name}</span>
            <span class="tel">${places.phone || '전화번호 없음'}</span>
            <a href="${places.place_url}" target="_blank" style="display:inline-block; margin-top:5px; color:var(--main-color); font-size:12px; text-decoration:none; font-weight:700;">상세보기 / 길찾기 ➔</a>
        </div>
    `;
    
    el.innerHTML = itemStr;
    el.className = 'item';
    
    // 찜 버튼에 클릭 이벤트 추가 (버블링 방지)
    const wishBtn = el.querySelector('.wish-btn');
    wishBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const bizName = this.getAttribute('data-name');
        if (typeof toggleWish === 'function') {
            const isAdded = toggleWish(bizName);
            if (isAdded) this.classList.add('active');
            else this.classList.remove('active');
        }
    });

    return el;
}

function addMarker(position, idx) {
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png',
        imageSize = new kakao.maps.Size(36, 37),
        imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), 
            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), 
            offset: new kakao.maps.Point(13, 37)
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
            position: position,
            image: markerImage 
        });
    marker.setMap(map);
    markers.push(marker);
    return marker;
}

function removeMarker() {
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
}

function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i; 

    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }
        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;color:#333;font-size:14px;font-weight:bold;">' + title + '</div>';
    infowindow.setContent(content);
    infowindow.open(map, marker);
}

 function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}