package com.baskar;

//Method Overloading in Java 

public class MyClass2 {
	void myMethod(String name) {
		System.out.println("Welcome "+name);
		
	}
	
	void myMethod(int a,int b) {
		System.out.println("Sum : "+ (a+b));
	}
	void myMethod(int n) {
		System.out.println("Sum : "+ (n+n));
	}
	
	
	public static void main(String[] args) {
	   MyClass2 obj=new MyClass2();
	   obj.myMethod(5);
	   obj.myMethod("Vijay");
	   obj.myMethod(10,20);

	}

}
