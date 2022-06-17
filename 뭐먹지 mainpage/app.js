// var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// var options = { //지도를 생성할 때 필요한 기본 옵션
// 	center: new kakao.maps.LatLng(35.86719, 128.5961), //지도의 중심좌표.
// 	level: 3 //지도의 레벨(확대, 축소 정도)
// };

// var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


// 주소값 여러개 추가할떄 카카오지도 api 마커 라고 검색해보기

// 추가하는 api 값

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(35.86719, 128.5961), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '수락산시로', 
        latlng: new kakao.maps.LatLng(35.86718506
			, 128.596149)
    },
    {
        title: '8번식당', 
        latlng: new kakao.maps.LatLng(35.87235875,128.5868833
			)
    },
    {
        title: '국밥', 
        latlng: new kakao.maps.LatLng(35.8658874,	128.5935768
			)
    },
    {
        title: '가창식당',
        latlng: new kakao.maps.LatLng( 35.86689141 , 128.5914228)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}