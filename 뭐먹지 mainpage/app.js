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
    },
	{
        title: '가창큰나무집약령시점', 
        latlng: new kakao.maps.LatLng(35.86808
			, 128.5897)
    },
	{
        title: '갈비탕집	', 
        latlng: new kakao.maps.LatLng(35.87073671,	128.6065228 )
    },
	{
        title: '강구', 
        latlng: new kakao.maps.LatLng( 35.86896042,	128.586743)
    },
	{
        title: '강산면옥(교동점)	', 
        latlng: new kakao.maps.LatLng( 35.873639,	128.5964)
    },
	{
        title: '개정', 
        latlng: new kakao.maps.LatLng( 	35.86766978,	128.5979854)
    },
	{
        title: '개정동성로점', 
        latlng: new kakao.maps.LatLng( 	35.870055,	128.596501)
    },
	{
        title: '거창식당', 
        latlng: new kakao.maps.LatLng(
				35.86899006,	128.5865919 )
    },
	{
        title: '고전 한정식', 
        latlng: new kakao.maps.LatLng( 	35.864622,	128.603267)
    },
	{
        title: '고향뜰', 
        latlng: new kakao.maps.LatLng( 	35.86860548,	128.5958952)
    },
	{
        title: '관음', 
        latlng: new kakao.maps.LatLng( 	35.87337779	,128.5927474)
    },
	{
        title: '교동따로식당', 
        latlng: new kakao.maps.LatLng(
				35.87150803,	128.5928746 )
    },
	{
        title: '국대 닭곱새', 
        latlng: new kakao.maps.LatLng(	35.8676992,	128.5970876 )
    },
	{
        title: '국일삼계탕', 
        latlng: new kakao.maps.LatLng( 	35.871727	,128.581944 )
    },

	{
        title: '국일생갈비', 
        latlng: new kakao.maps.LatLng(	35.8704232,	128.5845197 )
    },
	{
        title: '국일식당', 
        latlng: new kakao.maps.LatLng( 	35.87456198	,128.5964077 )
    },
	{
        title: '국화정원', 
        latlng: new kakao.maps.LatLng( 
				35.8660323,	128.603)
    },
	{
        title: '굿또스시', 
        latlng: new kakao.maps.LatLng( 	35.86408799	,128.6077011)
    },
	{
        title: '궁채', 
        latlng: new kakao.maps.LatLng( 	35.866317,	128.591853)
    },
	{
        title: '근대골목단팥빵 커피인코나', 
        latlng: new kakao.maps.LatLng( 	35.86780707,	128.5903444)
    },
	{
        title: '낙영식당별관', 
        latlng: new kakao.maps.LatLng(	35.8718361,	128.60594 )
    },
	{
        title: '낙영찜갈비', 
        latlng: new kakao.maps.LatLng(	35.8712706,	128.6049424 )
    },

	{
        title: '낙원순두부', 
        latlng: new kakao.maps.LatLng( 	35.871415,	128.597565 )
    },
	{
        title: '남문납작만두', 
        latlng: new kakao.maps.LatLng( 	35.86045509,	128.5905952 )
    },
	{
        title: '남문주자', 
        latlng: new kakao.maps.LatLng(	35.86033095	,128.5911857 )
    },
	{
        title: '남산동이영옥할매보쌈', 
        latlng: new kakao.maps.LatLng( 	35.861196	,128.5901)
    },
	{
        title: '녹양', 
        latlng: new kakao.maps.LatLng(	35.87246163	,128.5940156 )
    },

	{
        title: '다금예전칼국수', 
        latlng: new kakao.maps.LatLng( 	35.86974768,	128.5861066)
    },
	{
        title: '다전칼국수', 
        latlng: new kakao.maps.LatLng(	35.86801234,	128.5920388 )
		
    },
	{
		title: '달팽이식당', 
		latlng: new kakao.maps.LatLng( 35.86968667,	128.5911889)
	},
	
		
	{
		title: '닭한끼', 
		latlng: new kakao.maps.LatLng(35.86115439,	128.6067707 )
	},
		
	{
		title: '대구전통따로', 
		latlng: new kakao.maps.LatLng(35.870967,	128.592411 )
	},
		
	{
		title: '대동면옥', 
		latlng: new kakao.maps.LatLng(35.86997245,	128.5857286 )
	},
		
	{
		title: '대한뉴스', 
		latlng: new kakao.maps.LatLng(35.86202788	,128.6058124 )
	},
		
	{
		title: '덕영대반점', 
		latlng: new kakao.maps.LatLng(35.875206,	128.588086 )
	},
		
	{
		title: '도쿄다이닝', 
		latlng: new kakao.maps.LatLng( 35.8674152,	128.5964015)
	},
		
	{
		title: '동곡막걸리', 
		latlng: new kakao.maps.LatLng(35.86216754,	128.60615 )
	},
		
	{
		title: '동명', 
		latlng: new kakao.maps.LatLng(35.86743225,	128.5985658 )
	},
		
	{
		title: '동원찜갈비', 
		latlng: new kakao.maps.LatLng(35.8705962,	128.6051721 )
	},
		
	{
		title: '동흥반점', 
		latlng: new kakao.maps.LatLng(35.869092,	128.608827 )
	},
		
	{
		title: '두찜 동성로점', 
		latlng: new kakao.maps.LatLng(35.867854,	128.597589 )
	},
	
		
	{
		title: '둥굴관', 
		latlng: new kakao.maps.LatLng(35.87199401,	128.6024761 )
	},
		
	{
		title: '뜨돈', 
		latlng: new kakao.maps.LatLng(35.86661679,	128.5941004 )
	},
		
	{
		title: '라루체', 
		latlng: new kakao.maps.LatLng( 35.86719925,	128.6034711)
	},
		
	{
		title: '루시드', 
		latlng: new kakao.maps.LatLng(35.8688477,	128.599667 )
	},
		
	{
		title: '마당갈비', 
		latlng: new kakao.maps.LatLng(35.86868613,	128.5875383 )
	},
		
	{
		title: '마시뜰(계산점)', 
		latlng: new kakao.maps.LatLng( 35.8671204,	128.5874319)
	},
		
	{
		title: '만리장성', 
		latlng: new kakao.maps.LatLng(35.86050439,	128.60248 )
	},
		
	{
		title: '명동통닭', 
		latlng: new kakao.maps.LatLng( 35.87120313,	128.5990025)
	},
		
	{
		title: '명성숯불갈비', 
		latlng: new kakao.maps.LatLng(35.871699,	128.602383 )
	},
		
	{
		title: '묵돌이생고기', 
		latlng: new kakao.maps.LatLng(35.8680597,	128.5920789 )
	},
		
	{
		title: '미도다방', 
		latlng: new kakao.maps.LatLng( 35.86825347,	128.5925075)
	},
		
	{
		title: '미래징기스칸', 
		latlng: new kakao.maps.LatLng( 35.87134551	,128.5931379)
	},
		
	{
		title: '미림', 
		latlng: new kakao.maps.LatLng(35.87091383,	128.5811388 )
	},
		
	{
		title: '미미네집', 
		latlng: new kakao.maps.LatLng(35.8696717,	128.5905687 )
	},
		
	{
		title: '미성당', 
		latlng: new kakao.maps.LatLng(35.86321998,	128.5821898 )
	},
		
	{
		title: '미원회식당', 
		latlng: new kakao.maps.LatLng(35.874288,	128.595205 )
	},
		
	{
		title: '미진분식', 
		latlng: new kakao.maps.LatLng(35.86742794,	128.5942801 )
	},
		
	{
		title: '바라지레스토랑', 
		latlng: new kakao.maps.LatLng(35.87338684,	128.5956904 )
	},
		
	{
		title: '바스코', 
		latlng: new kakao.maps.LatLng( 35.86919339,	128.5997672)
	},
		
	{
		title: '밥을짓다', 
		latlng: new kakao.maps.LatLng(35.86957049	,128.5946319 )
	},
		
	{
		title: '방천가족족발', 
		latlng: new kakao.maps.LatLng(35.8616988,	128.60669 )
	},
		
	{
		title: '예전손국수', 
		latlng: new kakao.maps.LatLng( 35.86491363,	128.589735)
	},
		
	{
		title: '벙글벙글', 
		latlng: new kakao.maps.LatLng( 35.8710018,	128.6051652)
	},
		
	{
		title: '베이글 닥터', 
		latlng: new kakao.maps.LatLng(35.86365839	,128.6017359 )
	},
		
	{
		title: '벽돌집', 
		latlng: new kakao.maps.LatLng(35.861139,	128.6047261 )
	},
		{
		title: '복주', 
		latlng: new kakao.maps.LatLng( 35.8644388,	128.5946243)
	},
	
		
	{
		title: '본죽앤 비빔밥(동성로점)', 
		latlng: new kakao.maps.LatLng(35.871938,	128.595573 )
	},
		
	{
		title: '봉산찜갈비', 
		latlng: new kakao.maps.LatLng(35.8708906,	128.6048786 )
	},
		
	{
		title: '부산안면옥', 
		latlng: new kakao.maps.LatLng(35.87063522	,128.5989501 )
	},
		
	{
		title: '부엉이', 
		latlng: new kakao.maps.LatLng(35.8738007,	128.5937457 )
	},
		
	{
		title: '블랙타코앤그릴', 
		latlng: new kakao.maps.LatLng(35.86658076,	128.599526 )
	},
		
	{
		title: '삐에뜨라', 
		latlng: new kakao.maps.LatLng( 35.868402,	128.5891101)
	},
		
	{
		title: '사계절 한방굴국밥', 
		latlng: new kakao.maps.LatLng(35.868863,	128.58926 )
	},
		
	{
		title: '산', 
		latlng: new kakao.maps.LatLng( 35.8675825,	128.5926386)
	},
		
	{
		title: '산호찜갈비', 
		latlng: new kakao.maps.LatLng(35.8708906,	128.6048786 )
	},
		
	{
		title: '삼삼구이초밥', 
		latlng: new kakao.maps.LatLng(35.86441606,	128.5948419 )
	},
		
	{
		title: '삼삼구이초밥', 
		latlng: new kakao.maps.LatLng(35.86442286,	128.594848 )
	},
		
	{
		title: '상주식당', 
		latlng: new kakao.maps.LatLng( 35.87019175,	128.5962148)
	},
		
	{
		title: '서영', 
		latlng: new kakao.maps.LatLng(35.86816839,	128.5885905 )
	},
		
	{
		title: '선댄스팜', 
		latlng: new kakao.maps.LatLng( 35.8603326,	128.6053907)
	},
		
	{
		title: '성주', 
		latlng: new kakao.maps.LatLng(35.868194,	128.579243 )
	},
		
	{
		title: '성주숯불갈비', 
		latlng: new kakao.maps.LatLng(35.8716607,	128.5836143 )
	},
		
	{
		title: '세연전통콩국', 
		latlng: new kakao.maps.LatLng(35.8612519,	128.5871093 )
	},
		
	{
		title: '수복찜갈비', 
		latlng: new kakao.maps.LatLng(35.8715051,	128.6054425 )
	},
		
	{
		title: '시안', 
		latlng: new kakao.maps.LatLng(35.8699233,	128.5927842 )
	},
		
	{
		title: '신단설렁탕', 
		latlng: new kakao.maps.LatLng(35.8702211,	128.601784 )
	},
		
	{
		title: '신숙(신주쿠)', 
		latlng: new kakao.maps.LatLng(35.86926527,	128.5926573 )
	},
		
	{
		title: '신짜오', 
		latlng: new kakao.maps.LatLng(35.867187,	128.597888 )
	},
		
	{
		title: '실비찜갈비', 
		latlng: new kakao.maps.LatLng( 35.8706819,	128.6048017)
	},
		
	{
		title: '씨제이푸드빌(주)빕스수성교점', 
		latlng: new kakao.maps.LatLng(35.861814	,128.607394 )
	},
		
	{
		title: '아사다라', 
		latlng: new kakao.maps.LatLng(35.85583,	128.606345 )
	},
		
	{
		title: '약전삼계탕', 
		latlng: new kakao.maps.LatLng(35.86883725,	128.5902751 )
	},
		
	{
		title: '약전식당', 
		latlng: new kakao.maps.LatLng(35.86872415,	128.5908052 )
	},
		
	{
		title: '어청도회', 
		latlng: new kakao.maps.LatLng(35.867371	,128.606166 )
	},
		
	{
		title: '에스파스', 
		latlng: new kakao.maps.LatLng(35.87042649	,128.5910394 )
	},
		
	{
		title: '영발장', 
		latlng: new kakao.maps.LatLng(35.864194,	128.596719 )
	},
		
	{
		title: '영생덕', 
		latlng: new kakao.maps.LatLng(35.86940203,	128.591383 )
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



	
	






















	


// 옛집	35.87212643,	128.5817801
// 오이쏘이	35.86321859,	128.5959574
// 올가닉신라	35.85657162,	128.603945
// 왕거미	35.86851089,	128.6067071
// 우각식육식당	35.8630643,	128.5870108
// 원도매	35.871021,	128.599161
// 원주통닭	35.86836944,	128.5974819
// 월성찜갈비	35.8707754,	128.6048346
// 유경식당	35.87237778,	128.5931032
// 유닭스토리	35.86887,	128.587473
// 유진찜갈비	35.8711067,	128.6049069
// 이모식당	35.872213,	128.586884
// 적두병	35.87336453,	128.5809976
// 전원	35.86796659	,128.5954866
// 전주맛집	35.855814,	128.606398
// 정담	35.8648012,	128.5916845
// 종로숯불갈비	35.86825704,	128.5922734
// 중앙떡볶이	35.86957552,	128.5967777
// 중화반점	35.8693,	128.594407
// 진골목	35.86807272,	128.5922421
// 진주통닭	35.86060191,	128.5919266
// 차이	35.86677296,	128.5971357
// 착한다슬기	35.8686107,	128.5892846
// 청기와양곱창식당	35.8696985,	128.5906788
// 청라	35.8692043,	128.5868781
// 카마타케제면소 대구본점	35.8673558,	128.5932692
// 큐산	35.86842904,	128.5957971
// 태산만두	35.8667294,	128.5940879
// 토끼정	35.868137,	128.5974984
// 통나무집	35.86893422,	128.5927503
// 푸르다코리아 경성상회	35.8666031,	128.6001843
// 풍기인삼갈비 단	35.870485,	128.604012
// 프랑스싸롱	35.87055052,	128.6023355
// 하이타이	35.8679881,	128.6003575
// 한스델리	35.8674811,	128.5938227
// 한옥집	35.86978106,	128.604788
// 함흥면옥	35.85579	,128.606377
// 해뜨는 아침	35.8670809,	128.5927323
// 행복식당	35.86567804	,128.5949508
// 현대옥 경대병원점	35.867254,	128.603396
// 현풍닭칼국수 동성로점	35.8656403,	128.5969703
// 화림보쌈	35.861614,	128.589948
// 황소	35.873839,	128.593975
// 황소식당	35.87184868,	128.5946067
// 힛또	35.855809,	128.606378
