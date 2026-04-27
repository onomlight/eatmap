/* ===========================
   eatmap - 메인 지도 스크립트 (v5.0)
   (라이브 API 연동 & 카테고리별 아이콘 적용)
   =========================== */

var mapContainer = document.getElementById("map"), 
    mapOption = {
        center: new kakao.maps.LatLng(35.8714, 128.6014), // 대구 중심좌표
        level: 5, 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 
var geocoder = new kakao.maps.services.Geocoder();
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

// 카테고리별 마커 이미지 매핑
const markerImages = {
    '한식': './img/korean.png',
    '일식': './img/japanese.png',
    '중식': './img/chinese.png',
    '양식': './img/western.png',
    '카페/디저트': './img/bread.png',
    '베이커리': './img/bread.png',
    '카페': './img/bread.png',
    '디저트': './img/bread.png',
    '기타': './img/logo.png'
};

// 전역 상태 및 상수
const SERVICE_KEY = "00cdRlwrMjS4gVVR2JIDZgF4bKenwV21kqsrtLQamIji3Hg7C8SsVF7jMrJVwfCbgVbTBnyDNkNcVheAweYUFA=="; 
const DAEGU_API_URL = "https://www.daegufood.go.kr/kor/api/tasty.html?mode=json";
const NATIONWIDE_API_URL = "http://apis.data.go.kr/1741000/mainModelRestrnt/getMainModelRestrntList";

let currentSido = "대구광역시";
let currentGugun = "중구";

// 마커 클러스터러 초기화
var clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 6,
    styles: [{
        width : '53px', height : '52px',
        background: 'rgba(255, 107, 107, 0.8)',
        borderRadius: '50%',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: '54px',
        border: '2px solid #fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    }]
});

// 데이터 로드 및 마커 표시 함수
function loadRestaurants(sido, gugun) {
    clusterer.clear(); // 기존 마커 제거
    
    let url = "";
    let isDaegu = (sido === "대구광역시");
    
    if (isDaegu) {
        url = `${DAEGU_API_URL}&addr=${encodeURIComponent(gugun || "중구")}`;
    } else {
        // 전국 표준 데이터 API (Service Key 필요)
        url = `${NATIONWIDE_API_URL}?serviceKey=${SERVICE_KEY}&type=json&pageNo=1&numOfRows=100`;
        // 지역 필터링이 API 레벨에서 지원되지 않는 경우 클라이언트에서 처리하거나 
        // 전제 데이터를 가져온 후 필터링
    }

    $.ajax({
        url: url,
        dataType: "json",
        success: function(response) {
            console.log(`${sido} ${gugun} 데이터 로드 성공:`, response);
            
            let items = [];
            if (isDaegu) {
                items = response.data || [];
            } else {
                // 행안부/포털 API 공통 구조 대응
                if (response.response && response.response.body && response.response.body.items) {
                    items = response.response.body.items.item || response.response.body.items;
                    if (!Array.isArray(items)) items = [items]; // 단건일 경우 배열화
                }
            }

            if (!items || items.length === 0) {
                // 데이터가 없는 경우 로컬 폴백 또는 안내
                if (isDaegu) fetchLocalFallback();
                return;
            }

            items.forEach(function(rawItem, index) {
                const item = mapToUnifiedFormat(rawItem);
                if (!item.address) return;

                // 지오코딩 속도 조절
                setTimeout(function() {
                    geocoder.addressSearch(item.address, function(result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                            var imageSrc = markerImages[item.category] || './img/logo.png';
                            var markerImage = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(34, 34));

                            var marker = new kakao.maps.Marker({
                                position: coords,
                                image: markerImage,
                                title: item.name
                            });

                            kakao.maps.event.addListener(marker, 'click', function() {
                                openModal(rawItem); // 원본 객체 전달
                            });
                            
                            clusterer.addMarker(marker);
                        }
                    });
                }, index * 40);
            });
        },
        error: function() {
            if (isDaegu) fetchLocalFallback();
        }
    });
}

function fetchLocalFallback() {
    $.getJSON("./data.json", function(data) {
        data.forEach(item => {
            geocoder.addressSearch(item.GNG_CS, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    clusterer.addMarker(new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(result[0].y, result[0].x)
                    }));
                }
            });
        });
    });
}

// 지역 선택 이벤트 리스너 (UI에서 트리거)
$(document).on('change', '#sido-select, #gugun-select', function() {
    const sido = $("#sido-select").val();
    const gugun = $("#gugun-select").val();
    loadRestaurants(sido, gugun);
});

// 초기 로드
$(document).ready(function() {
    loadRestaurants(currentSido, currentGugun);
});

