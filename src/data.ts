import { Character, Faction, MapLocation } from "./types";

export const WORLDVIEW = [
  "도심의 네온사인과 일상의 이면에 사람들의 소망과 절망이 뒤섞인 마법의 세계가 공존하는 현대 어반 판타지 세계관입니다.",
  "어느 날 도심 한복판에서 시공간이 일그러지는 '원인 불명의 공진 현상'이 발생합니다. 그 파동은 소녀들의 감정과 결합해 마력을 각성시키며, 이를 통제하지 못한 자들은 이성을 잃고 끔찍한 '마녀'로 변모하게 됩니다.",
  "마녀는 위험도에 따라 3단계로 분류됩니다. 본능만 남은 괴물 형태의 '말레아스', 파편화된 심상과 기괴한 지능을 지닌 '알토리에', 그리고 완벽한 자아와 이성을 갖춘 최악의 재앙 '발푸르기스'가 존재합니다.",
  "우연한 계기로 마력을 각성한 소녀들은 '마법소녀'라 불리며 놀라운 힘을 얻게 됩니다. 하지만 마력을 사용할수록 감정이 침식되며, 언제든 자신도 발푸르기스로 폭주할 수 있다는 시한폭탄 같은 위험을 안고 싸워야 합니다.",
  "도시를 관리하는 정부는 비밀리에 마법소녀 지원 기관인 '루미에르 학원'을 설립하여, 소녀들이 스스로의 마력을 통제하고 올바르게 싸울 수 있도록 훈련과 장비를 지원하고 있습니다.",
  "동시에, 사회의 차별과 통제에 반발하여 스스로의 이익과 쾌락을 위해 마력을 남용하는 구제 불능의 '마법 빌런' 연합인 '판도라'가 등장하여 끝없는 갈등을 빚고 있습니다.",
  "모든 마법소녀는 마력을 각성할 때, 자신의 근원적인 감정과 염원에 걸맞은 고유한 '개념' 명칭을 부여받습니다. (예: 어떤 절망 속에서도 빛을 잃지 않는 소녀 = '희망'의 마법소녀)"
];

export const FACTION_INFO = [
  { name: "루미에르 학원", desc: "정부가 공식적으로 설립한 마법소녀 전문 교육 및 전술 훈련 기관. 소녀들이 스스로의 마력을 통제하고 위험한 발푸르기스로 변이하는 것을 막기 위해 체계화된 훈련을 제공합니다. 학생회와 선도부를 중심으로 질서를 유지하며, 학년별 '동아리' 방식의 작전 팀 단위로 실전 임무를 수행하는 것이 특징입니다." },
  { name: "불량아들", desc: "엄격하고 획일화된 루미에르의 방침에 반발하여 등교를 거부하고 자신만의 방식을 추구하는 이탈자 집단입니다. 진짜 악의를 품은 빌런들과는 성격이 다르나, 억눌린 불만으로 인해 언제든 마녀로 폭주할 위험이 있는 위태로운 경계선에 머물러 있습니다." },
  { name: "판도라", desc: "도시의 치안 시스템을 정면으로 부정하고 자신들의 초월적인 도구와 마력을 쾌락이나 사욕을 위해 남용하는 마법 빌런 연합집단입니다. 표면적으로는 '세계 정복'을 외치지만, 사실상 사회의 차별과 혐오가 응집하여 탄생한 반항아들의 모임에 가깝습니다." },
  { name: "태초의 마녀들", desc: "모든 재앙의 시발점인 '시작의 공진' 당시부터 존재했던 네 명의 근원적 마녀들. 괴물이라는 껍데기를 넘어 완벽한 인간의 형태와 자아를 구축한 이들은 현재 엄청난 힘을 숨긴 채, 인간 사회의 일상에 스며들어 관찰자로서 숨어 지내고 있습니다." },
  { name: "기타 (무소속)", desc: "어느 거대 세력의 규칙이나 질서에도 구속되지 않는 철저한 방랑자 및 관찰자들. 잃어버린 기억을 쫓거나 도시의 이면에서 자신만의 조용한 사투를 벌이고 있으며, 이들의 존재는 이야기의 중요한 전환점이 되기도 합니다." }
];

export const MAP_LOCATIONS: MapLocation[] = [
  { id: 1, name: "대도시 (아침)", desc: "작품의 주 무대가 되는 거대 도시. 수많은 사람들이 모여 사는 만큼 긍정과 부정의 감정이 교차하며 수많은 사건이 벌어지는 가장 기본이 되는 일상 무대이다." },
  { id: 2, name: "대도시 거리 (아침)", desc: "도심의 활기찬 아침 거리. 바쁘게 움직이는 사람들과 함께 마법소녀의 잔잔한 일상적인 풍경을 엿볼 수 있다." },
  { id: 3, name: "대도시 (밤)", desc: "네온사인과 인공조명이 불야성을 이루는 도시의 야경. 어둠이 내리고 사람들의 부정적인 감정이 짙어져 범죄와 원인 불명의 공진, 나아가 마녀 출몰의 주 무대가 된다." },
  { id: 4, name: "대도시 거리 (밤)", desc: "인적이 드문 차가운 밤거리. 은밀하고 음습한 분위기가 감돌며, 불량아들이나 마법 빌런인 판도라 세력이 암약하는 거래 장소로 자주 쓰인다." },
  { id: 5, name: "루미에르 학원", desc: "도시가 지원하는 최첨단 마법소녀 육성 학원이자 최고 보안의 안전지대. 넓은 영토를 보유하고 있으며, 소녀들의 힘 제어와 실전 전술 훈련을 체계적으로 담당한다." },
  { id: 6, name: "루미에르 교실 (낮)", desc: "학생들의 일상적인 대화와 우정이 싹트는 따뜻한 아침 풍경을 간직한 공간. 방과 후 동아리 활동의 구심점이기도 하다." },
  { id: 7, name: "루미에르 학원 (밤)", desc: "학생들이 대부분 기숙사로 돌아가 정적만이 감도는 학원 전경. 학원의 감춰진 실체나 학생회, 선도부의 심야 비밀 작전 회의가 진행되곤 한다." },
  { id: 8, name: "루미에르 교실 (밤)", desc: "조용히 가라앉은 분위기의 텅 빈 교실. 은밀한 거래나, 개인적인 갈등, 누군가의 무거운 스토리가 전개되는 짙은 감정의 장소." },
  { id: 9, name: "판도라 거점", desc: "루미에르를 거부하며 힘을 남용하는 빌런 집단 '판도라'의 본거지. 도시 지하 어딘가 깊은 곳에 존재하며, 내부는 거대한 흑마법 성당같이 생겨 웅장하고 압도적인 분위기를 뿜는다." },
  { id: 10, name: "공진 구역 (말레아스)", desc: "도시 어딘가에서 터져나오는 재앙의 시발점인 '공진'. 마력 수용에 실패해 이성을 잃은 괴물 마녀 '말레아스'의 거점이다." }
];

export const FACTIONS: Faction[] = [
  {
    id: "lumiere-1st",
    name: "루미에르 1학년",
    characters: [
      { name: "아유나", gender: "여", age: 17, originalHair: "분홍 장발", transformHair: "분홍 낮은 트윈테일", eyes: "푸른", casualOutfit: "하얀셔츠+검은스커트+카디건", transformOutfit: "흰드레스+깃털머리핀+마법봉", personality: "명랑, 다정, 허당, 희망적, 의지, 상냥", feature: "이타적 소녀 / 차별에도 사람 구하는데 보람 / 이례적 '희망' 명칭 / 1학년 동아리 리더", ability: "희망", code: "A" },
      { name: "이하늘", gender: "여", age: 17, originalHair: "하늘색 장발", transformHair: "하늘색 단발", eyes: "푸른 민트", casualOutfit: "검은셔츠+회색자켓+검은모자", transformOutfit: "고양이귀후드+푸른목도리+하얀드레스+고양이장갑+하늘색방망이", personality: "낙관적, 나른, 능글, 여유", feature: "아유나 친구 / 교복 대충 입음 / 아유나 영향으로 긍정적", ability: "낙관", code: "B" },
      { name: "박세린", gender: "여", age: 17, originalHair: "검은 단발", transformHair: "검은 장발", eyes: "보라", casualOutfit: "검은카디건+하얀셔츠+검은자켓", transformOutfit: "하얀검은드레스+검은빵모자+검은검", personality: "무뚝뚝, 차분, 냉정, 의지, 쿨데레, 상냥", feature: "아유나 친구 / 겉은 차갑지만 상냥 / 얼음공주 별명에 곤란해함", ability: "의지", code: "C" },
      { name: "유세리", gender: "여", age: 17, originalHair: "갈색 낮은 포니테일", transformHair: "갈색 포니테일", eyes: "주황", casualOutfit: "하얀셔츠+검은스커트+주황자켓+헤드셋", transformOutfit: "주황슈러그+헤드셋+검은브라탑+주황건틀릿", personality: "즐거움, 활기, 유희적, 활발", feature: "아유나 친구 / 노는 것 좋아함 / 인싸 / 유세라의 동생", ability: "유희", code: "D" },
    ]
  },
  {
    id: "lumiere-dropout",
    name: "루미에르 낙제반",
    characters: [
      { name: "윤예슬", gender: "여", age: 17, originalHair: "붉은 장발", transformHair: "붉은 트윈테일", eyes: "녹색", casualOutfit: "하얀셔츠+검은스커트+카디건", transformOutfit: "붉은프릴드레스+빨간페도라+붉은쌍권총", personality: "츤데레, 자존심, 까칠, 의지, 노력가, 허당", feature: "허당끼 때문에 낙제반 / 낙제반 리더격 / 항상 최선", ability: "과정", code: "E" },
      { name: "한서율", gender: "여", age: 17, originalHair: "회색 단발", transformHair: "회색 장발 더벅", eyes: "초록", casualOutfit: "하얀셔츠+검은후드자켓", transformOutfit: "검은드레스+데스사이저+검은목도리", personality: "소심, 감정기복, 눈치없음, 의외로 뻔뻔, 금방 우쭐, 말더듬", feature: "판도라 스파이 / 순수하게 공부 못해서 낙제반 / 약하다 생각→강해짐, 강하다 생각→약해짐", ability: "역설", code: "F" },
      { name: "서독화", gender: "여", age: 18, originalHair: "녹색 장발", transformHair: "녹색 짧은 포니테일", eyes: "연두", casualOutfit: "하얀셔츠+검은스커트+녹색자켓", transformOutfit: "하얀녹색드레스+초록케이플릿", personality: "능글, 교활, 관망적, 유연, 장난기", feature: "성격 때문에 낙제반 / 예슬을 재밌어함", ability: "관망(바람계열)", code: "G" },
      { name: "백방울", gender: "여", age: 18, originalHair: "은발 낮은 포니테일", transformHair: "은발 장발", eyes: "파랑/주황(오드아이)", casualOutfit: "개조하얀셔츠+검은핫팬츠+하얀자켓", transformOutfit: "하얀세라복브라탑+하얀자켓+푸른머리띠+고양이귀+허리푸른자켓+검은핫팬츠", personality: "명랑, 밝음, 장난기, 활발", feature: "성적 우수 but 재미로 자진 낙제반 입반", ability: "변칙", code: "H" },
    ]
  },
  {
    id: "lumiere-disciplinary",
    name: "루미에르 선도부",
    characters: [
      { name: "김성하", gender: "여", age: 18, originalHair: "검은색+파랑브릿지 낮은 포니테일", transformHair: "검은색+파랑브릿지 단발", eyes: "붉은", casualOutfit: "하얀셔츠+교복+파랑완장", transformOutfit: "하얀셔츠+검은코르셋+한쪽팔갑옷+검은스커트+검은검", personality: "차가움, 냉정, 쿨데레, 원칙적, 규율중시", feature: "백도하 소꿉친구 / 선도부 부장(백도하 챙김)", ability: "진실", code: "I" },
      { name: "백도하", gender: "여", age: 18, originalHair: "하얀 단발", transformHair: "하얀 울프컷", eyes: "주황", casualOutfit: "하얀셔츠+하얀자켓+완장", transformOutfit: "하얀제복+제복모자+하얀꽃머리장식+하얀장검", personality: "능글, 털털, 아저씨 같음, 명랑, 활발", feature: "선도부장 / 대충 해보여도 일 확실 처리 / 유하울과 마찰", ability: "규율", code: "J" },
      { name: "강유라", gender: "여", age: 18, originalHair: "연보라 길게 땋은 머리", transformHair: "연보라 단발", eyes: "노랑", casualOutfit: "하얀셔츠+보라카디건+스커트", transformOutfit: "보라빵모자+하얀오프쇼더드레스+보라소매", personality: "나른, 이성적, 지적, 차분, 존댓말", feature: "선도부 회계 / 멍청한거 싫어함", ability: "이성", code: "K" },
      { name: "장서아", gender: "여", age: 17, originalHair: "금발 포니테일", transformHair: "금발 단발", eyes: "푸른", casualOutfit: "하얀셔츠+허리묶은갈색자켓+완장+갈색머리띠", transformOutfit: "노란자켓+하얀브라탑+검은핫팬츠+얼굴밴드", personality: "털털, 갸루, 매우활발, 즐거움, 인싸, 착함", feature: "선도부 홍보담당 / 막내 / 불량아 같지만 전교권", ability: "경쾌", code: "L" },
    ]
  },
  {
    id: "lumiere-council",
    name: "루미에르 학생회",
    characters: [
      { name: "유하울", gender: "여", age: 18, originalHair: "푸른 은발 장발", transformHair: "푸른 은발 장발", eyes: "오색빛(푸른+핑크)", casualOutfit: "하얀셔츠+하네스+스커트+한쪽어깨푸른망토", transformOutfit: "검은셔츠+검은바지+파랑망토+별머리핀+블레이드", personality: "차가움, 쿨데레, 원칙적, 상냥, 차분", feature: "학생회장 / 인연을 가장 소중히 여김 / 백도하와 마찰", ability: "인연", code: "M" },
      { name: "윤미래", gender: "여", age: 18, originalHair: "핑크빛 백발 장발", transformHair: "핑크빛 백발 장발", eyes: "실눈(붉은)", casualOutfit: "하얀셔츠+하얀자켓+검은안대+스커트", transformOutfit: "하얀후드자켓+검은코르셋+헤일로+검은바지", personality: "나른, 신비, 상냥, 차분, 장난기", feature: "학생회 부회장 / 유하울 소꿉친구 / 유하울 귀여워함", ability: "통찰", code: "N" },
      { name: "이유빈", gender: "여", age: 17, originalHair: "갈색 짧은 포니테일", transformHair: "갈색 단발", eyes: "붉은", casualOutfit: "하얀셔츠+스커트+회색머리띠", transformOutfit: "갈색빵모자+갈색드레스+갈색자켓+마도서+노란리본", personality: "차분, 냉정, 규율적, 까칠, 츤데레", feature: "학생회 회계 / 막내", ability: "기록", code: "O" },
      { name: "송주아", gender: "여", age: 18, originalHair: "붉은빛 주황 장발", transformHair: "붉은빛 주황 포니테일+하늘색브릿지", eyes: "주황색", casualOutfit: "하얀셔츠+하네스+붉은목도리+스커트", transformOutfit: "붉은목도리+붉은레이싱슈트", personality: "활발, 에너지넘침, 살짝 바보같음, 명랑", feature: "학생회 홍보담당 / 후배에게 인기 많음", ability: "이속", code: "P" },
    ]
  },
  {
    id: "lumiere-3rd",
    name: "루미에르 3학년",
    characters: [
      { name: "강청아", gender: "여", age: 19, originalHair: "푸른빛 흑발 장발", transformHair: "푸른빛 흑발 낮은 트윈테일", eyes: "푸른", casualOutfit: "하얀셔츠+검은스커트", transformOutfit: "하얀오프숄더셔츠+검은허리까지오는스커트+푸른소매+활", personality: "차분, 상냥, 이성적, 이상적, 지적", feature: "3학년 리더 / 베테랑 / 후배 아낌", ability: "상생(수속성)", code: "Q" },
      { name: "박채린", gender: "여", age: 19, originalHair: "붉은 앞묶은 단발", transformHair: "붉은 짧은 트윈테일", eyes: "붉은", casualOutfit: "하얀셔츠+스커트", transformOutfit: "검은모자+하얀브라탑+검은핫팬츠+하얀자켓+거대망치", personality: "털털, 명랑, 살짝 메스가키, 대담", feature: "과거 낙제반 / 현재 말년 병장 느낌 / 작은 키", ability: "회심", code: "R" },
      { name: "나현서", gender: "여", age: 19, originalHair: "하늘색 아래 포니테일", transformHair: "하늘색 단발", eyes: "하늘색", casualOutfit: "하얀셔츠+스커트+하얀자켓", transformOutfit: "하늘색모자+하늘색정장(마술사복)+눈아래스페이드스티커", personality: "능글, 장난기, 단순, 교묘", feature: "마술 좋아함 / 단순한 사고방식", ability: "허영", code: "S" },
      { name: "이바람", gender: "여", age: 19, originalHair: "하얀+초록브릿지 단발", transformHair: "하얀+초록브릿지 장발", eyes: "연두", casualOutfit: "하얀셔츠+스커트+초록자켓", transformOutfit: "초록스포츠브라+하얀자켓+검은랩스커트+한쪽날개", personality: "털털, 무관심, 까칠, 나른, 츤데레, 직설", feature: "마법소녀 인식에 불만 많음 / 풍선껌 좋아함", ability: "소망", code: "T" },
    ]
  },
  {
    id: "lumiere-teachers",
    name: "루미에르 교사",
    characters: [
      { name: "강체하", gender: "여", age: 21, originalHair: "검은 묶은 단발", transformHair: "검은 단발", eyes: "검은", casualOutfit: "하얀자켓+교사증+검은코트+검은바지", transformOutfit: "검은후드자켓+검은셔츠+하네스+벨트+검은스커트+검은목도리", personality: "차분, 무뚝뚝, 이성적, 피곤, 덤덤", feature: "교사 / 무관심해 보여도 학생 진심으로 아낌 / 유세라와 동기", ability: "책임", code: "U" },
      { name: "유세라", gender: "여", age: 21, originalHair: "갈색 묶은 단발", transformHair: "갈색 포니테일", eyes: "금색", casualOutfit: "하얀셔츠+어깨에노란털코트+선글라스", transformOutfit: "하얀오프숄더셔츠+검은코르셋+털자켓", personality: "능글, 명랑, 교활, 분석적", feature: "교사 / 유세리 언니 / 강체하와 동기 / 학원 최대 후원자 / 부자 / 시스콘", ability: "성공", code: "V" },
      { name: "성박하", gender: "여", age: 23, originalHair: "민트색 장발", transformHair: "연두색 장발", eyes: "녹색", casualOutfit: "하얀셔츠+스커트", transformOutfit: "하얀오프숄더드레스+초록로브+화관+나무지팡이", personality: "상냥, 친절, 이성적, 지적, 이해적", feature: "교사 / 유세라·강체하의 선배", ability: "이해", code: "W" },
      { name: "체운슬", gender: "여", age: 22, originalHair: "은발 장발", transformHair: "은발 장발", eyes: "보라/푸른(오드아이)", casualOutfit: "검은제복+하얀소매+완장+파랑넥타이", transformOutfit: "검은제복+파랑넥타이+거대마검", personality: "까칠, 츤데레, 직설, 이성적, 계산적, 예민", feature: "루미에르 교장 / 최초의 마법소녀(이유하)의 동생 / 언니를 찾는 중", ability: "운명", code: "X" },
    ]
  },
  {
    id: "delinquents",
    name: "불량아들",
    characters: [
      { name: "전소라", gender: "여", age: 18, originalHair: "연보라 낮은 포니테일", transformHair: "연보라 장발", eyes: "회색", casualOutfit: "검은바디스타킹+연보라슈러그+허리에보라자켓", transformOutfit: "보라자켓+보라스카프+하얀셔츠+검은바디스타킹+허리자켓+팔보호대+토끼귀", personality: "나른, 무뚝뚝, 무관심, 호기심, 분석적", feature: "불량아들 리더격 / 현 체제 불만 / 분석 좋아함", ability: "분석", code: "Y" },
      { name: "체하루", gender: "여", age: 18, originalHair: "짙은 보라 장발", transformHair: "짙은 보라 단발", eyes: "분홍", casualOutfit: "회색자켓+검은드레스+벨트", transformOutfit: "검은바디슈트+하얀후드자켓+하얀하네스", personality: "음침, 전파녀, 호기심, 창의적, 4차원", feature: "매드 사이언티스트 / 전소라 따라 나옴 / 흥미로운 것 좋아함", ability: "특성", code: "Z" },
      { name: "이예린", gender: "여", age: 17, originalHair: "분홍 포니테일", transformHair: "분홍 장발", eyes: "회색/붉은(오드아이)", casualOutfit: "하얀셔츠+검은프릴스커트", transformOutfit: "하얀셔츠+검은케이플릿+검은스커트", personality: "예민, 능글, 교활, 고혹적, 매혹적, 약간 광기", feature: "금사빠 / 사랑 이야기에 관심 많음 / 플레이어를 '달링'이라 부름", ability: "애상", code: "AB" },
      { name: "안서하", gender: "여", age: 17, originalHair: "하늘색 장발 히메컷", transformHair: "하늘색 단발", eyes: "연보라", casualOutfit: "하얀셔츠+연보라자켓+하늘색스커트", transformOutfit: "하얀스커트(배노출)+하늘색자켓+돌고래후드+돌고래꼬리+검은돌핀팬츠+거대 닻", personality: "나른, 우유부단, 맹함, 피곤, 귀찮은거 싫음", feature: "전소라 친구 / 끌려오듯 불량아 합류 / 수영장 좋아함", ability: "혼란", code: "BC" },
    ]
  },
  {
    id: "others",
    name: "기타",
    characters: [
      { name: "이유하", gender: "여", age: 23, originalHair: "은회색 장발", transformHair: "흰색 검은색 반반 장발", eyes: "보라/노랑(오드아이)", casualOutfit: "회색드레스+하얀베일+회색프릴헤어핀", transformOutfit: "회색프릴드레스+검은코르셋+회색프릴소매+검회색베일+헤일로", personality: "상냥, 차분, 이성적, 지적, 따뜻, 감성적", feature: "최초의 마법소녀 / 마녀와 인간 사이의 존재가 됨 / 은둔 중 / 체운슬 언니", ability: "시작", code: "CD" },
      { name: "유미나", gender: "여", age: 18, originalHair: "짙은 붉은+하얀브릿지 단발", transformHair: "짙은 붉은+하얀브릿지 장발", eyes: "주황(X자 동공)", casualOutfit: "붉은목도리+회색셔츠+붉은자켓+검은바지", transformOutfit: "검은자켓+검은브라탑+회색바지+붉은목도리+단검벨트", personality: "능글, 냉소적, 도발기, 외강내유, 성장형, 책임감", feature: "동공 사건때 이유하에게 구해짐 / 이유하와 생활 중 / 정체불명", ability: "숙명", code: "DE" },
      { name: "멜피", gender: "여", age: "???", originalHair: "검은 단발+하얀브릿지", transformHair: "검은 장발+하얀브릿지+은하빛", eyes: "하얀색", casualOutfit: "검은코트+검은셔츠+검은스커트", transformOutfit: "검은셔츠+검은자켓+마녀모자+하네스+검은스커트", personality: "차분, 명랑, 귀여움, 활발, 장난기, 복합적, 지적", feature: "최초의 마녀 / 기억+힘 상실 / 현재 거리에서 생활 중 (변신 가능)", ability: "???", code: "IJ" },
    ]
  },
  {
    id: "pandora",
    name: "판도라",
    characters: [
      { name: "유소아", gender: "여", age: 18, originalHair: "보라빛 은발 장발", transformHair: "보라빛 은발 장발", eyes: "붉은", casualOutfit: "하얀셔츠+검보라드레스", transformOutfit: "검보라제복+제복코트+제복모자", personality: "능글, 허당, 위엄있어 보려함, 은근 소심, 엉뚱", feature: "판도라 수장 / 수장이지만 소심 / 바보", ability: "야망", code: "JK" },
      { name: "이지율", gender: "여", age: 16, originalHair: "연노랑 아래로 길게 땋은 머리", transformHair: "연노랑 단발", eyes: "?", casualOutfit: "고양이털모자+연노랑후드티", transformOutfit: "노랑점퍼+하네스+고글+여우귀+무장가방", personality: "나른, 맹함, 귀여움, 4차원, 로망적", feature: "판도라 막내 / 로망계 능력 전부 사용 가능하나 텍티컬만 사용 중", ability: "?", code: "KL" },
      { name: "이예슬", gender: "여", age: 17, originalHair: "백발+무지개브릿지 낮은 포니테일", transformHair: "무지개색 단발", eyes: "주황(별모양 동공)", casualOutfit: "멜빵바지+하얀셔츠+하얀카디건+검은빵모자", transformOutfit: "하얀모자+하얀셔츠+스커트+하얀자켓+거대한붓", personality: "천진난만, 명랑, 밝음, 산만, 확신적, 예술적", feature: "예술적 감각", ability: "예술", code: "LM" },
      { name: "미지수", gender: "여", age: 18, originalHair: "진한 붉은 트윈테일", transformHair: "진한 붉은 단발", eyes: "붉은", casualOutfit: "하얀가운+검은스커트+검은목도리", transformOutfit: "고양이귀하얀후드코트+하얀셔츠+모애소매+플라스크병벨트", personality: "고혹적, 탐구적, 분석적, 흥미, 약간 광기", feature: "판도라의 두뇌 / 흥미로운 것 매우 좋아함", ability: "탐구", code: "MN" },
      { name: "유체린", gender: "여", age: 17, originalHair: "베이지색 사이드 포니테일", transformHair: "베이지색 장발", eyes: "분홍", casualOutfit: "검은브라탑+하얀자켓+베이지색핫팬츠", transformOutfit: "검은오프숄더드레스+검은빵모자+머리에검은장미", personality: "쾌락적, 활발, 장난기, 충동적, 대범함, 욕망", feature: "유소아 절친 / 유소아 챙김 / 하고싶은건 다 함 / 학원 우등생", ability: "욕망", code: "QP" },
      { name: "김유성", gender: "여", age: 18, originalHair: "남색 단발", transformHair: "남색 장발", eyes: "연한 하늘색", casualOutfit: "검은모자+하얀셔츠+검회색자켓", transformOutfit: "검은모자+검은운동복+완장+야구배트", personality: "차분, 다혈질, 나른, 피곤, 현실적", feature: "야구 빠돌이 / 평소 차분하나 야구만 보면 눈돌아감", ability: "허상", code: "NO" },
      { name: "채민아", gender: "여", age: 17, originalHair: "하늘색 장발", transformHair: "하늘색 낮은 포니테일+히메컷", eyes: "주황색", casualOutfit: "회색카디건+하얀셔츠+스커트+검은머리띠", transformOutfit: "무녀복", personality: "명량, JK, 나긋, 순수, 호기심, 백치미", feature: "외국인 혼혈 / 견학이라 속아서 판도라에 합류(이제는 신경안씀)", ability: "차별", code: "RS" },
    ]
  },
  {
    id: "original-witches",
    name: "태초의 마녀들",
    characters: [
      { name: "한무아", gender: "여", age: "???", originalHair: "베이지색 낮은 포니테일", transformHair: "-", eyes: "회색빛 연두", casualOutfit: "회색코트+회색셔츠+검은스커트+머리에검은꽃", transformOutfit: "-", personality: "무뚝뚝, 차분, 냉정, 이성적, 체계적, 거만", feature: "초대 마녀 첫째 / 도시 탐방 중 / 동생들 아낌", ability: "허무", code: "FG" },
      { name: "주시아", gender: "여", age: "???", originalHair: "검은 트윈테일", transformHair: "-", eyes: "붉은", casualOutfit: "붉은드레스+검은소매+구속복드레스", transformOutfit: "-", personality: "광기, 능글, 활발, 쾌락주의, 장난기, 교활", feature: "초대 마녀 둘째 / 도파민 중독자 / 도박소·유흥가 생활", ability: "구속", code: "GH" },
      { name: "이유슬", gender: "여", age: "???", originalHair: "하늘색 분홍 반반 장발", transformHair: "-", eyes: "분홍", casualOutfit: "하얀튜브탑후드+하얀자켓+검은핫팬츠+헤드셋", transformOutfit: "-", personality: "소심, 은근 뻔뻔, 허접, 허당, 우쭐", feature: "초대 마녀 셋째 / 히키코모리 / 게임 랭커 / 서주아 애정", ability: "외면", code: "HI" },
      { name: "서주아", gender: "여", age: "???", originalHair: "은발 단발", transformHair: "-", eyes: "하얀", casualOutfit: "하얀셔츠+검은프릴스커트+검은하얀프릴소매+어깨장갑", transformOutfit: "-", personality: "무뚝뚝, 신비, 차분, 호기심, 맹함", feature: "초대 마녀 넷째(막내) / 야행성 / 미식거리 탐방", ability: "반전", code: "EF" },
    ]
  }
]
