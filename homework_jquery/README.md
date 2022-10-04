# TIL

## JQUERY

---

1. jQuery

   - 2006년 모질라 사의 자바스크립트 개발자였던 존 레식(John Resing)이
     창시했다.

   - 자바스크립트를 이용해 만든 라이브러리 언어이다.

   - 라이브러리 언어란 자바스크립트로 만들어진 다양한 함수들의 집합을 의미한다.

   - 브라우저들간의 호환성 문제를 해결했다.

   - 쉽고 편리한 애니메이션 효과기능 등을 구현했다.

2. 라이브러리 연동하기

   - j Query 라이브러리를 http://jQuery.com사이트에서 다운받아 사용하는 방법

   - 온라인에서 jQuery 라이브러리 파일을 제공하는 네트워크에서 파일을 연동하여
     가져오는 네트워크 전송방식(CDN:Content Delivery Network) (인터넷이 되야 한다.)
     구글

   - "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

3. 제이쿼리 최신 버전에서 삭제된 이전 버전의 메서드 사용하기

   - 제이쿼리는 최신 버전으로 업그레이드가 되면서 기존의 메서드가 삭제되여 있는
     것을 제공해준다.

   - https://github.com/jquery/jquery-migrate에서 다운받아 설치를 한다.

4. 제이쿼리 선택자

   - 객체에 접근할 수 있도록 하기 위해서 선택자를 지정한다.

   - jQuery에서 제공하는 선택자는 직접선택자와 인접관계선택자가 있다.

   - 제이쿼리 선택자 사용준비 (선언문)

     (1) $(document).ready(function(){실행문장;});

     (2) $(function () {alert('문서가 로딩된 후 실행할 문장');});

---

## jQuery 선택자

### CSS jQuery : $('태그 or 선택자').css({});

: 문자 사이에 하이픈 '-'이 들어가면 홑따옴표로 묶어줘야 한다.  
 ex) 'background-color' , 'font-size' ...

: css 안에 속성값을 입력할 때에는 홑따옴표 안에 값을 넣어야 한다.

: 정적인 요소 - HTML내에 body에 적힌 요소
: 동적인 요소 - 스크립트로 따로 생성한 요소

---

    - ' * ' : 모든 요소 선택
    - $('').parent() : '' 요소의 부모 요소
    - $('').children() : '' 요소의 자식 요소
    - $('').prev() : '' 요소의 이전 이웃 요소
    - $('').next() : '' 요소의 다음 이웃 요소
    - $('').even() : '' 요소의 짝수 요소 (index 0 부터 시작)
    - $('').odd() : '' 요소의 홀수 요소 (index 0 부터 시작)
    - $(''):nth-child(n) : '' 요소에서 모든 자식 요소 중 n번째 요소에 스타일 적용 (index 1 부터 시작)
    - $(''):nth-of-type(n) : '' 요소에서 n번째에 해당하는 ''요소에 스타일 적용 (index 1 부터 시작)

    - event
        • 이벤트 생성 : on('이벤트',함수) / 이벤트 제거 off('이벤트', 함수)
        • 이벤트함수(콜백함수) ; click(콜백함수)
        • 여러개의 이벤트 적용
            : 요소.on('이벤트 이벤트', 함수(){})
        • 이중 이벤트 생성
            : $('요소').on({이름(이벤트): 값(함수), 이름(이벤트): 값(함수)})
        • 동적인 요소에 이벤트 등록
            : $(document).on('이벤트', '요소', 함수(){})

    - value = val()
    - innerText = text()
    - innerHTML = html()

    - class 관련 이벤트
        • addClass : 클래스 속성 추가
        • removeClass : 클래스 속성 제거
        • toggleClass : 토글 클래스 추가(on/off기능이라고 생각하면 된다.)

    - forEach = each(index, function)

    - jquery형태와 nodejs형태 바꾸기
        • $(변수) : jquery 형태 (Object)
        • 변수[0] : nodejs 형태 (HTMLElement)

    - 속성 형태
        : attribute(HTML), property(Javascript)
        • attr() : HTML내에 해당하는 속성 값
        • prop() : 해당 속성의 출력 값

    - 기준 요소에 요수 추가하기
        • $('기준요소').before('추가요소')
        • $('기준요소').after('추가요소')
        • $('추가요소').insertBefore('기준요소')
        • $('추가요소').insertAfter('기준요소')

    - 부모 요소에 자식 요소 추가하기
        • $('부모 요소').append('추가할 자식 요소')
        • $('부모 요소').prepend('추가할 자식 요소')
        • $('추가할 자식요소').appenTo('부모 요소')
        • $('추가할 자식요소').prepenTo('부모 요소')

    - 요소 삭제
        • remove() : 선택한 요소 삭제
        • empty() : 선택한 요소의 하위 요소 삭제

    - change : cilck이벤트와 달리 값이 바뀌었을 때 이벤트가 발생한다.

    - Mouse 관련 이벤트
        • mouseover
        • mouseout
        • mouseenter
        • mouseleave
        • mousemove : 마우스를 움직일 때의 출력 값
        • mouseup : 마우스를 땠을 때 출력 값
        • mousedown : 마우스를 누르고 있을 때 출력 값

    - keyup : 키보드를 누루고 땠을 때
    - keydown : 키보드를 눌렀을 때

    - 위치 및 크기 이벤트
        • position() : 선택한 요소의 포지션 위치 값 리턴(기준이 자신)
        • offset() : 선택한 요소의 포지션 위치값 리턴(기준이 바디)
        • width() : margin, border, padding을 제외한 가로 크기 리턴
        • innerWidth() : padding()을 포함한 가로 크기 리턴
        • outerWidth() : border와 padding을 포함한 가로 크기 리턴
        • outerWidth(true) : margin, border, padding을 포함한 가로 크기 리턴

    - scrollTop() : 현재 스크롤창의 위치 값

---

## jQuery 관련 사이트

- https://jquery.com/ 제이쿼리 홈페이지

- https://jqueryui.com/ 제이쿼리 UI 라이브러리

- https://bxslider.com/ 제이쿼리 관련 bx 슬라이더 라이브러리
