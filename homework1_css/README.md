# TIL

## CSS 문서 작성 구조

1.  기본형식

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

2.  pesudo class(가상선택자)

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

3.  css 여러 속성

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

    > text 속성

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
      - vertical속성 : align(정렬값): top, middle, bottom  
        (테이블 요소에서는 center가 디폴트 값이다.)

    > border 속성

    - border: border-width border-style border-color|initial|inherit; (style값은 필수로 넣어야 한다.)
    - border값의 지정  
      : 시계 방향으로 값을 지정한다.  
      : 값을 만약 두개만 지정했다면 (top,bottom right,left)식으로 지정한다.

    > list-style 속성

    - type : 리스트 스타일의 기호 지정
    - image:url() : 리스트 스타일의 기호에 이미지 삽입
    - position : 들여쓰는 효과내기 (inside, outside)

    > display 속성

    - 요소의 레벨을 변경해주는 속성
    - none : 화면에서 보이지 않게 만든다.(공간을 차지하지 않는다.)
    - block : 인라인 요소를 블럭 요소로 바꿔준다.
    - inline : 블록 요소를 인라인 요소로 바꿔준다.
    - inline-block : 인라인 요소에 블록 요소를 합쳐 크기와 높이 값을 줄 수 있다.
    - table-cell : 테이블 요소로 바꿔준다.(기본적으로 가운데 정렬)

    > float 속성

    - 박스의 위치를 부모요소의 안에서 왼쪽 또는 오른쪽으로 이동시키는 속덩
    - 지정된 박스는 문서의 일반적인 흐름에 영향을 받지 않으면서 이동된 위치에 떠 있다.
    - clear:both; : 왼쪽 오른쪽 상관없이 둘 다 영향을 안받는다.(float 해제)

    > position 속성
    > : 포지션은 박스에 대한 배치를 변경할 때 사용된다.
    > 좌표값을 이용해서 위치를 옮긴다.

    - static : 순서에 의한 기본위치를 지정한다. (이동 불가능)
    - relative : 자기 자신을 기준으로 현재 위치를 지정한다. (원래의 위치값을 가지고 있다. 겹치기 불가능)
    - absolute :  
      부모 요소를 기준으로 위치를 지정한다.  
       부모요소도 반드시 position값을 설정해야 한다.  
       (원래의 위치값을 잃는다. 겹치기 가능)
      - 부모 요소의 position이 static이면 기준점이 body가 된다.
      - 부모 요소의 position이 absolute, relative이면 기준점이 부모요소가 된다.
    - fixed : 스크린(브라우저)를 기준으로 위치를 지정한다. (원래의 위치값을 잃는다. 겹치기 가능)

    > z-index 속성

    - 화면상에서 요소들이 겹쳐있을 때 요소의 위치를 나타내는 속성
    - 숫자가 큰 요소가 가장 위에 배치된다.

    > visibilty 속성

    - 대상을 보이거나 보이지않게 지정하는 속성
    - visible : 설정한 값을 보여준다.
    - hidden : 설정한 값을 숨겨주지만 설정한 크기 값은 그대로 입력이 되어있다.

    > overflow 속성

    - 내부의 요소가 부모의 범위를 벗어날 떄 어떻게 처리할지 지정하는 속성
    - visible : 넘치는 값을 보여준다.
    - hidden : 넘치는 값을 숨겨준다.
    - auto : 텍스트에 맞게끔 설정해준다.
    - scroll : 텍스트에 상관없이 항상 스크롤바를 설정한다.

    > white space 속성

    - 텍스트와 함께 입력된 공백을 어떻게 처리할것인지 지정하는 속성
    - normal : 기본값으로 연속하는 공백을 하나로 처리. 줄바꿈 o
    - nowrap : 연속하는 공백을 하나로 처리. 줄바꿈 x
    - pre : 원본을 그대로 표시. 연속하는 공백을 그대로 표시. 줄바꿈 x
    - pre-line : 연속하는 공백은 하나로 취급하며 표시. 줄바꿈 o
    - pre-wrap : 연속하는 공백을 원본 그대로 표시. 줄바꿈 o
