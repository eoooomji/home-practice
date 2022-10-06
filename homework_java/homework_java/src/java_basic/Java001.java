package java_basic;

public class Java001 {

	public static void main(String[] args) {
		// 변수 선언
		int data; // 데이터타입 변수명;

		// 값 할당
		data = 3; // data변수에 3값을 할당(저장)

		System.out.println(data); // 3

		// data변수에 새로운 값 할당
		data = 10;
		System.out.println(data); // 10

		double avg = 4; // 4.0
		System.out.println(avg);
		// int num = 4.0;
		// Type mismatch: cannot convert from double to int
		// long ko = 4.0F;
		// Type mismatch: cannot convert from float to long

		int x = 0101;
		System.out.println(x); // 65 8진수 

		int y = 65;
		System.out.println(y); // 65 10진수

		int z = 0B101;
		System.out.println(z); // 5 2진수
		
		int k = 0x101;
		System.out.println(k); // 257 26진수

	}

}
