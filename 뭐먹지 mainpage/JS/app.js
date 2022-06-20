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
        level: 4 // 지도의 확대 레벨
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
        content: '8번식당', 
        latlng: new kakao.maps.LatLng(35.87235875,128.5868833
			)
    },
    {
        content: '국밥', 
        latlng: new kakao.maps.LatLng(35.8658874,	128.5935768
			)
    },
    {
        content: '가창식당',
        latlng: new kakao.maps.LatLng( 35.86689141 , 128.5914228)
    },
	{
        content: '가창큰나무집약령시점', 
        latlng: new kakao.maps.LatLng(35.86808
			, 128.5897)
    },
	{
        content: '갈비탕집	', 
        latlng: new kakao.maps.LatLng(35.87073671,	128.6065228 )
    },
	{
        content: '강구', 
        latlng: new kakao.maps.LatLng( 35.86896042,	128.586743)
    },
	{
        content: '강산면옥(교동점)	', 
        latlng: new kakao.maps.LatLng( 35.873639,	128.5964)
    },
	{
        content: '개정', 
        latlng: new kakao.maps.LatLng( 	35.86766978,	128.5979854)
    },
	{
        content: '개정동성로점', 
        latlng: new kakao.maps.LatLng( 	35.870055,	128.596501)
    },
	{
        content: '거창식당', 
        latlng: new kakao.maps.LatLng(
				35.86899006,	128.5865919 )
    },
	{
        content: '고전 한정식', 
        latlng: new kakao.maps.LatLng( 	35.864622,	128.603267)
    },
	{
        content: '고향뜰', 
        latlng: new kakao.maps.LatLng( 	35.86860548,	128.5958952)
    },
	{
        content: '관음', 
        latlng: new kakao.maps.LatLng( 	35.87337779	,128.5927474)
    },
	{
        content: '교동따로식당', 
        latlng: new kakao.maps.LatLng(
				35.87150803,	128.5928746 )
    },
	{
        content: '국대 닭곱새', 
        latlng: new kakao.maps.LatLng(	35.8676992,	128.5970876 )
    },
	{
        content: '국일삼계탕', 
        latlng: new kakao.maps.LatLng( 	35.871727	,128.581944 )
    },

	{
        content: '국일생갈비', 
        latlng: new kakao.maps.LatLng(	35.8704232,	128.5845197 )
    },
	{
        content: '국일식당', 
        latlng: new kakao.maps.LatLng( 	35.87456198	,128.5964077 )
    },
	{
        content: '국화정원', 
        latlng: new kakao.maps.LatLng( 
				35.8660323,	128.603)
    },
	{
        content: '굿또스시', 
        latlng: new kakao.maps.LatLng( 	35.86408799	,128.6077011)
    },
	{
        content: '궁채', 
        latlng: new kakao.maps.LatLng( 	35.866317,	128.591853)
    },
	{
        content: '근대골목단팥빵 커피인코나', 
        latlng: new kakao.maps.LatLng( 	35.86780707,	128.5903444)
    },
	{
        content: '낙영식당별관', 
        latlng: new kakao.maps.LatLng(	35.8718361,	128.60594 )
    },
	{
        content: '낙영찜갈비', 
        latlng: new kakao.maps.LatLng(	35.8712706,	128.6049424 )
    },

	{
        content: '낙원순두부', 
        latlng: new kakao.maps.LatLng( 	35.871415,	128.597565 )
    },
	{
        content: '남문납작만두', 
        latlng: new kakao.maps.LatLng( 	35.86045509,	128.5905952 )
    },
	{
        content: '남문주자', 
        latlng: new kakao.maps.LatLng(	35.86033095	,128.5911857 )
    },
	{
        content: '남산동이영옥할매보쌈', 
        latlng: new kakao.maps.LatLng( 	35.861196	,128.5901)
    },
	{
        content: '녹양', 
        latlng: new kakao.maps.LatLng(	35.87246163	,128.5940156 )
    },

	{
        content: '다금예전칼국수', 
        latlng: new kakao.maps.LatLng( 	35.86974768,	128.5861066)
    },
	{
        content: '다전칼국수', 
        latlng: new kakao.maps.LatLng(	35.86801234,	128.5920388 )
		
    },
	{
		content: '달팽이식당', 
		latlng: new kakao.maps.LatLng( 35.86968667,	128.5911889)
	},
	
		
	{
		content: '닭한끼', 
		latlng: new kakao.maps.LatLng(35.86115439,	128.6067707 )
	},
		
	{
		content: '대구전통따로', 
		latlng: new kakao.maps.LatLng(35.870967,	128.592411 )
	},
		
	{
		content: '대동면옥', 
		latlng: new kakao.maps.LatLng(35.86997245,	128.5857286 )
	},
		
	{
		content: '대한뉴스', 
		latlng: new kakao.maps.LatLng(35.86202788	,128.6058124 )
	},
		
	{
		content: '덕영대반점', 
		latlng: new kakao.maps.LatLng(35.875206,	128.588086 )
	},
		
	{
		content: '도쿄다이닝', 
		latlng: new kakao.maps.LatLng( 35.8674152,	128.5964015)
	},
		
	{
		content: '동곡막걸리', 
		latlng: new kakao.maps.LatLng(35.86216754,	128.60615 )
	},
		
	{
		content: '동명', 
		latlng: new kakao.maps.LatLng(35.86743225,	128.5985658 )
	},
		
	{
		content: '동원찜갈비', 
		latlng: new kakao.maps.LatLng(35.8705962,	128.6051721 )
	},
		
	{
		content: '동흥반점', 
		latlng: new kakao.maps.LatLng(35.869092,	128.608827 )
	},
		
	{
		content: '두찜 동성로점', 
		latlng: new kakao.maps.LatLng(35.867854,	128.597589 )
	},
	
		
	{
		content: '둥굴관', 
		latlng: new kakao.maps.LatLng(35.87199401,	128.6024761 )
	},
		
	{
		content: '뜨돈', 
		latlng: new kakao.maps.LatLng(35.86661679,	128.5941004 )
	},
		
	{
		content: '라루체', 
		latlng: new kakao.maps.LatLng( 35.86719925,	128.6034711)
	},
		
	{
		content: '루시드', 
		latlng: new kakao.maps.LatLng(35.8688477,	128.599667 )
	},
		
	{
		content: '마당갈비', 
		latlng: new kakao.maps.LatLng(35.86868613,	128.5875383 )
	},
		
	{
		content: '마시뜰(계산점)', 
		latlng: new kakao.maps.LatLng( 35.8671204,	128.5874319)
	},
		
	{
		content: '만리장성', 
		latlng: new kakao.maps.LatLng(35.86050439,	128.60248 )
	},
		
	{
		content: '명동통닭', 
		latlng: new kakao.maps.LatLng( 35.87120313,	128.5990025)
	},
		
	{
		content: '명성숯불갈비', 
		latlng: new kakao.maps.LatLng(35.871699,	128.602383 )
	},
		
	{
		content: '묵돌이생고기', 
		latlng: new kakao.maps.LatLng(35.8680597,	128.5920789 )
	},
		
	{
		content: '미도다방', 
		latlng: new kakao.maps.LatLng( 35.86825347,	128.5925075)
	},
		
	{
		content: '미래징기스칸', 
		latlng: new kakao.maps.LatLng( 35.87134551	,128.5931379)
	},
		
	{
		content: '미림', 
		latlng: new kakao.maps.LatLng(35.87091383,	128.5811388 )
	},
		
	{
		content: '미미네집', 
		latlng: new kakao.maps.LatLng(35.8696717,	128.5905687 )
	},
		
	{
		content: '미성당', 
		latlng: new kakao.maps.LatLng(35.86321998,	128.5821898 )
	},
		
	{
		content: '미원회식당', 
		latlng: new kakao.maps.LatLng(35.874288,	128.595205 )
	},
		
	{
		content: '미진분식', 
		latlng: new kakao.maps.LatLng(35.86742794,	128.5942801 )
	},
		
	{
		content: '바라지레스토랑', 
		latlng: new kakao.maps.LatLng(35.87338684,	128.5956904 )
	},
		
	{
		content: '바스코', 
		latlng: new kakao.maps.LatLng( 35.86919339,	128.5997672)
	},
		
	{
		content: '밥을짓다', 
		latlng: new kakao.maps.LatLng(35.86957049	,128.5946319 )
	},
		
	{
		content: '방천가족족발', 
		latlng: new kakao.maps.LatLng(35.8616988,	128.60669 )
	},
		
	{
		content: '예전손국수', 
		latlng: new kakao.maps.LatLng( 35.86491363,	128.589735)
	},
		
	{
		content: '벙글벙글', 
		latlng: new kakao.maps.LatLng( 35.8710018,	128.6051652)
	},
		
	{
		content: '베이글 닥터', 
		latlng: new kakao.maps.LatLng(35.86365839	,128.6017359 )
	},
		
	{
		content: '벽돌집', 
		latlng: new kakao.maps.LatLng(35.861139,	128.6047261 )
	},
		{
		content: '복주', 
		latlng: new kakao.maps.LatLng( 35.8644388,	128.5946243)
	},
	
		
	{
		content: '본죽앤 비빔밥(동성로점)', 
		latlng: new kakao.maps.LatLng(35.871938,	128.595573 )
	},
		
	{
		content: '봉산찜갈비', 
		latlng: new kakao.maps.LatLng(35.8708906,	128.6048786 )
	},
		
	{
		content: '부산안면옥', 
		latlng: new kakao.maps.LatLng(35.87063522	,128.5989501 )
	},
		
	{
		content: '부엉이', 
		latlng: new kakao.maps.LatLng(35.8738007,	128.5937457 )
	},
		
	{
		content: '블랙타코앤그릴', 
		latlng: new kakao.maps.LatLng(35.86658076,	128.599526 )
	},
		
	{
		content: '삐에뜨라', 
		latlng: new kakao.maps.LatLng( 35.868402,	128.5891101)
	},
		
	{
		content: '사계절 한방굴국밥', 
		latlng: new kakao.maps.LatLng(35.868863,	128.58926 )
	},
		
	{
		content: '산', 
		latlng: new kakao.maps.LatLng( 35.8675825,	128.5926386)
	},
		
	{
		content: '산호찜갈비', 
		latlng: new kakao.maps.LatLng(35.8708906,	128.6048786 )
	},
		
	{
		content: '삼삼구이초밥', 
		latlng: new kakao.maps.LatLng(35.86441606,	128.5948419 )
	},
		
	{
		content: '삼삼구이초밥', 
		latlng: new kakao.maps.LatLng(35.86442286,	128.594848 )
	},
		
	{
		content: '상주식당', 
		latlng: new kakao.maps.LatLng( 35.87019175,	128.5962148)
	},
		
	{
		content: '서영', 
		latlng: new kakao.maps.LatLng(35.86816839,	128.5885905 )
	},
		
	{
		content: '선댄스팜', 
		latlng: new kakao.maps.LatLng( 35.8603326,	128.6053907)
	},
		
	{
		content: '성주', 
		latlng: new kakao.maps.LatLng(35.868194,	128.579243 )
	},
		
	{
		content: '성주숯불갈비', 
		latlng: new kakao.maps.LatLng(35.8716607,	128.5836143 )
	},
		
	{
		content: '세연전통콩국', 
		latlng: new kakao.maps.LatLng(35.8612519,	128.5871093 )
	},
		
	{
		content: '수복찜갈비', 
		latlng: new kakao.maps.LatLng(35.8715051,	128.6054425 )
	},
		
	{
		content: '시안', 
		latlng: new kakao.maps.LatLng(35.8699233,	128.5927842 )
	},
		
	{
		content: '신단설렁탕', 
		latlng: new kakao.maps.LatLng(35.8702211,	128.601784 )
	},
		
	{
		content: '신숙(신주쿠)', 
		latlng: new kakao.maps.LatLng(35.86926527,	128.5926573 )
	},
		
	{
		content: '신짜오', 
		latlng: new kakao.maps.LatLng(35.867187,	128.597888 )
	},
		
	{
		content: '실비찜갈비', 
		latlng: new kakao.maps.LatLng( 35.8706819,	128.6048017)
	},
		
	{
		content: '씨제이푸드빌(주)빕스수성교점', 
		latlng: new kakao.maps.LatLng(35.861814	,128.607394 )
	},
		
	{
		content: '아사다라', 
		latlng: new kakao.maps.LatLng(35.85583,	128.606345 )
	},
		
	{
		content: '약전삼계탕', 
		latlng: new kakao.maps.LatLng(35.86883725,	128.5902751 )
	},
		
	{
		content: '약전식당', 
		latlng: new kakao.maps.LatLng(35.86872415,	128.5908052 )
	},
		
	{
		content: '어청도회', 
		latlng: new kakao.maps.LatLng(35.867371	,128.606166 )
	},
		
	{
		content: '에스파스', 
		latlng: new kakao.maps.LatLng(35.87042649	,128.5910394 )
	},
		
	{
		content: '영발장', 
		latlng: new kakao.maps.LatLng(35.864194,	128.596719 )
	},
		
	{
		content: '영생덕', 
		latlng: new kakao.maps.LatLng(35.86940203,	128.591383 )
	},
	{
		content: '옛집 ', 
		latlng: new kakao.maps.LatLng( 35.87212643,	128.5817801 )
	},
		
	{
		content: '오이쏘이 ', 
		latlng: new kakao.maps.LatLng(35.86321859,	128.5959574  )
	},
		
	{
		content: ' 올가닉신라', 
		latlng: new kakao.maps.LatLng(35.85657162,	128.603945  )
	},
		
	{
		content: '왕거미 ', 
		latlng: new kakao.maps.LatLng(35.86851089,	128.6067071  )
	},
		
	{
		content: ' 우각식육식당', 
		latlng: new kakao.maps.LatLng(35.8630643,	128.5870108  )
	},
		
	{
		content: '원도매 ', 
		latlng: new kakao.maps.LatLng( 35.871021,	128.599161 )
	},
		
	{
		content: ' 원주통닭', 
		latlng: new kakao.maps.LatLng(35.86836944,	128.5974819  )
	},
		
	{
		content: '월성찜갈비 ', 
		latlng: new kakao.maps.LatLng( 35.8707754,	128.6048346 )
	},
		
	{
		content: '유경식당 ', 
		latlng: new kakao.maps.LatLng( 35.87237778,	128.5931032 )
	},
	
	{
		content: ' 유닭스토리', 
		latlng: new kakao.maps.LatLng(	35.86887,	128.587473  )
	},
		
	{
		content: ' 유진찜갈비', 
		latlng: new kakao.maps.LatLng(35.8711067,	128.6049069  )
	},
		
	{
		content: '이모식당 ', 
		latlng: new kakao.maps.LatLng( 35.872213,	128.586884 )
	},
		
	{
		content: ' 적두병', 
		latlng: new kakao.maps.LatLng( 35.87336453,	128.5809976 )
	},
		
	{
		content: '전원 ', 
		latlng: new kakao.maps.LatLng( 35.86796659	,128.5954866 )
	},
		
	{
		content: ' 전주맛집', 
		latlng: new kakao.maps.LatLng( 35.855814,	128.606398 )
	},
		
	{
		content: '정담 ', 
		latlng: new kakao.maps.LatLng( 35.8648012,	128.5916845 )
	},
		
	{
		content: ' 종로숯불갈비', 
		latlng: new kakao.maps.LatLng(35.86825704,	128.5922734  )
	},
		
	{
		content: '중앙떡볶이 ', 
		latlng: new kakao.maps.LatLng(35.86957552,	128.5967777  )
	},
		
	{
		content: '중화반점 ', 
		latlng: new kakao.maps.LatLng( 35.8693,	128.594407 )
	},
		
	{
		content: '진골목 ', 
		latlng: new kakao.maps.LatLng(35.86807272,	128.5922421  )
	},
		
	{
		content: '진주통닭 ', 
		latlng: new kakao.maps.LatLng(35.86060191,	128.5919266  )
	},
		
	{
		content: '차이 ', 
		latlng: new kakao.maps.LatLng(35.86677296,	128.5971357  )
	},
		
	{
		content: ' 착한다슬기', 
		latlng: new kakao.maps.LatLng(35.8686107,	128.5892846  )
	},
		
	{
		content: ' 청기와양곱창식당', 
		latlng: new kakao.maps.LatLng( 35.8696985,	128.5906788  )
	},
	{ 
		content: ' 청라', 
		latlng: new kakao.maps.LatLng(35.8692043,	128.5868781
			 )
	},
		
	{
		content: '카마타케제면소 대구본점 ', 
		latlng: new kakao.maps.LatLng( 35.8673558,	128.5932692 )
	},
		
	{
		content: '큐산 ', 
		latlng: new kakao.maps.LatLng( 35.86842904,	128.5957971 )
	},
		
	{
		content: ' 태산만두', 
		latlng: new kakao.maps.LatLng(35.8667294,	128.5940879  )
	},
		
	{
		content: ' 토끼정', 
		latlng: new kakao.maps.LatLng( 35.868137,	128.5974984 )
	},
		
	{
		content: '통나무집 ', 
		latlng: new kakao.maps.LatLng(35.86893422,	128.5927503  )
	},
		
	{
		content: '푸르다코리아 경성상회 ', 
		latlng: new kakao.maps.LatLng(35.8666031,	128.6001843  )
	},
		
	{
		content: ' 풍기인삼갈비 단 ', 
		latlng: new kakao.maps.LatLng(35.870485,	128.604012  )
	},
		
	{
		content: ' 프랑스싸롱', 
		latlng: new kakao.maps.LatLng(35.87055052,	128.6023355  )
	},
		
	{
		content: '하이타이', 
		latlng: new kakao.maps.LatLng(35.8679881,	128.6003575  )
	},
		
	{
		content: '한스델리 ', 
		latlng: new kakao.maps.LatLng(35.8674811,	128.5938227  )
	},
		
	{
		content: ' 한옥집', 
		latlng: new kakao.maps.LatLng( 35.86978106,	128.604788 )
	},
		
	{
		content: ' 함흥면옥', 
		latlng: new kakao.maps.LatLng( 35.85579	,128.606377 )
	},
		
	{
		content: '해뜨는 아침 ', 
		latlng: new kakao.maps.LatLng( 35.8670809,	128.5927323 )
	},
		
	{
		content: ' 행복식당', 
		latlng: new kakao.maps.LatLng( 35.86567804	,128.5949508 )
	},
		
	{
		content: '현대옥 경대병원점 ', 
		latlng: new kakao.maps.LatLng( 35.867254,	128.603396 )
	},
		
	{
		content: '현풍닭칼국수 동성로점 ', 
		latlng: new kakao.maps.LatLng(35.8656403,	128.5969703  )
	},
		
	{
		content: ' 화림보쌈', 
		latlng: new kakao.maps.LatLng( 35.861614,	128.589948 )
	},
		
	{
		content: '황소 ', 
		latlng: new kakao.maps.LatLng(35.873839,	128.593975  )
	},
		
	{
		content: '황소식당 ', 
		latlng: new kakao.maps.LatLng(35.87184868,	128.5946067  )
	},
		
	{
		content: ' 힛또 ', 
		latlng: new kakao.maps.LatLng( 35.855809,	128.606378  )
	}
	
	
	
];

// 마커 이미지의 이미지 주소입니다
// var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
// for (var i = 0; i < positions.length; i ++) {
    
//     // 마커 이미지의 이미지 크기 입니다
//     var imageSize = new kakao.maps.Size(24, 35); 
    
//     // 마커 이미지를 생성합니다    
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });
// }



	
	
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
		
		
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
document.marke

/* 아래와 같이도 할 수 있습니다 */
/*
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    (function(marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다 
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map, marker);
        });

        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });
    })(marker, infowindow);
}
*/





















	



	
