# TIL

## CSS 문서 작성 구조

1. 기본형식

   > 선택자{속성:값;}

   - core 속성 : 여러 요소에서 공톡적으로 사용되는 속성이다.
   - id 속성 : 특정 요소에 고유값을 지정할 때 (하나의 속성에만 값을 줄 수 있다. 많이 사용 하지 않는다.)
   - class 속성 : 여러 요소들을 그룹화 할때 사용 (그룹값을 줄 때 사용한다. 일반적으로 많이 사용)
   - style 속성 : 요소에 직접 스타일을 지정할 때 사용
   - title 속성 : 요소에 설명을 지정할 때 사용

   > 선택자 우선순위

   - 우선 순위에 따라 나오는 출력값이 달라진다. 우선순위가 높은 순으로 먼저 출력된다.
     (기본 : 0001 / class : 0010 / id : 0010 / 직접 입력 : 1000)
   - !important : 우선순위 계산을 무시하며 무조건 적용되는 값

   > 선택자 조합

   - '\*' : 전체 선택자
   - '>' : 자식 선택자
   - ' ' : 공백은 자손 선택자
   - '+' : 인접(형제) 선택자
   - '[속성명=값]' : 속성 선택자
   - ',' : 그룹화 선택자

2. pesudo class(가상선택자)

   > a태그 가상 선택자

   - a:link : 방문 전 링크 상태
   - a:visitd : 방문 후 링크 상태
   - a:hover : 마우스 오버했을 때 상태
   - a:active : 클릭했을 때 상태
     > a태그 속성값
   - text-decoration : none, dashed, dotted, underline, double etc.. (앵커 태그 작성시 밑줄은 자동으로 생성된다.)

   > :first-child / :last-child

   - 어떤 한 요소값의 자식요소 중 (첫번째 자식요소/ 마지막 자식요소) 를 선택할 때

   > :nth-child(n) / :nth-of-type(n)

   - 모든 자식요소에서 n번째일 때 적용 / 어떤 type의 요소 중 n번째일 때 적용한다.
   - even, 2n : 짝수행
   - odd, 2n-1 : 홀수행

   > ::first-letter

   - 요소의 첫번째 글자를 선택해서 적용한다.

   > ::before / ::after

   - 어떠한 요소의 앞이나 뒤에 문장 혹은 무언갈 삽입할 때 사용한다.

3. css 여러 속성

   > background 속성

   - background : bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit; (백그라운드 단축 속성 사용시 위에 순으로 사용)

   - background-origin : 배경 위치 시작점을 결정
   - background-clip : 배경 이미지를 잘라낼 위치 결정.
     (border-box : 박스모델 가장 외곽 테두리까지 적용
     pading-box : 박스모델에서 테두리를 뺀 패딩범위까지 적용
     content-box : 박스모델에서 내용부분에만 적용)
   - background-color : 배경색 설정
   - background-image:url() : 배경 그림 지정
   - background-repeat : 배경 반복 설정 (기본적으로 반복값으로 나옴)
   - background-position : 왼쪽 수평(left, center, right) 오른쪽 수직(top, center, bottom)

   > 줄과 간격. 대소문자 속성

   - font : font-style font-variant font-weight font-size/line-height font-famliy|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit; (font-size와 font-family는 생략이 안되며 필수로 넣어야 한다.)
   - 폰트 사이즈는 여러가지 값을 지정할 수 있다. 쉼표로 구분이 가능하며 띄어쓰기가 들어가는 글꼴은 ""(쌍따옴표)를 사용하면 된다.
   - font-family: serif, "굴림", "Times New Roman";

   - font- style : 글꼴 기울이기 (italic, oblique)
   - font-size : 글꼴크기
   - font-weight : 글꼴의 굵기
   - font-variant : small-caps : 글자 크기는 유지하면서 대문자로 바꿔준다.
   - direction : 텍스트의 쓰기방향 지정 (ltr : 왼쪽에서 오른쪽 / trl 오른쪽에서 왼쪽)
   - line-height : 줄 높이를 지정하는 속성
   - letter-spacing : 글자 간격을 지정하는 속성
   - word-spacing : 단어 간격을 지정하는 속성

   > text

   - indent : '+'값을 주면 들여쓰기, '-'값을 주면 내여쓰기로 지정
   - align : 텍스트 정렬을 지정 (left, right, center, justify)
   - decoration : 텍스트 장식을 지정  
     (underline : 밑  
      line-through : 취소선  
      overline : 윗줄  
      none : 밑줄 없애기)
   - transform : 영문자일 때 텍스트의 대소문자를 지정  
     (capitalize : 시작하는 첫 번째 글자를 대문자로 변환  
     uppercase : 모든 글자를 대문자로 변환  
     lowercas : 모든 글자를 소문자로 변환  
     none : 변환하지 않음)
   - vertical : 텍스트의 수직정렬 (top, middle, bottom)

   > border 속성

   - border: border-width border-style border-color|initial|inherit; (style값은 필수로 넣어야 한다.)
   - border값의 지정  
     : 시계 방향으로 값을 지정한다.  
     : 값을 만약 두개만 지정했다면 (top,bottom right,left)식으로 지정한다.

   > list-style

   - type : 리스트 스타일의 기호 지정
   - image:url() : 리스트 스타일의 기호에 이미지 삽입
   - position : 들여쓰는 효과내기 (inside, outside)
