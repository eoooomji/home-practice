# JAVA

---

## 1. JAVA

	: 클래스 명의 시작은 무조건 대문자여야 한다.
	
	: 모든 단어의 첫글자는 대문자여야 한다.
	
	: JAVA에서는 데이터 값을 각각 다른 메모리에 저장시킨다.
	
### Data Type
	
---

		- 리터럴(literal) 
			: 그 자체의 값(1, 2, 3, ...., 'a', 'b', 'c', ....., true, false)
 	 	- 변수(variable) : 하나의 값을 저장하기 위한 메모리 공간
  						:자바에서 제공하는 데이터 타입
  		1. Primitive Data Type(기본 데이터 타입)
 			문자 - char(2byte)
  			숫자 - 정수 : byte(1byte), short(2byte), int(4byte), long(8byte)
  	    		- 실수 : float(4byte), double(8byte)
   			논리 - boolean(1byte) 	
   			참고 : 1byte = 8bit (1byte의 범위 : -128 ~ 127)
			(자바 명령어 및 단축키는 구글링)
   
  		2. Reference Data Type(참조 데이터 타입)
  			Array, Class, Interface
   
   		3. 시스템에서 인식하는 데이터 타입 크기
   			: byte < char, short < int < long < float < double
   			   		
   		4. System.out.print() : 값을 출력
   		   System.out.println() : 출력 후 자동 줄바꿈
   		   System.out.printf("출력형식", 값1, 값2, 값3...) : 어떤 형식의 문자열을 출력할 수 있다.
   		   • 출력 기호
   		    %d : 정수(byte, short, int, long)
		    %f : 실수(float, double)
		    %b : 논리(boolean)
		    %c : 문자(char)
		    %s : 문자열(String)
		    %% : %
		    \n : 줄바꿈
		    \t : 탭 
   		   
   		5. 형변환(casting)
   			- 묵시적 형변환 : 작은 데이터 타입을 큰 데이터 타입으로 변환할 때 발생
   			- 명시적 형변환 : 큰 데이터 타입을 작은 데이터 타입으로 변환할 때 발생
   		
   		6. 주의사항
   			- char : 하나만 저장 가능. 홑따옴표를 이용한다.
   			- String : 쌍따옴표를 이용한다.
   			- 변수를 선언하기 전에 무조건 데이터 타입을 입력해야 한다.
   			- 값의 데이터 타입과 변수의 데이터 타입을 일치 시켜야 한다. 다르다면 형변환(casting)을 해줘야 한다.