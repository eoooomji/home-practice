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
        • on('이벤트',콜백함수)
        • 이벤트함수(콜백함수) ; click(콜백함수)