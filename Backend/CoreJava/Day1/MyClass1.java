package com.baskar;

public class MyClass1 {
	 String name;
	MyClass1(String name) {
		this(10,20);
		this.name=name;
		this.greeting();
		}
	
	MyClass1(int a, int b){
		System.out.println("Addition :"+ (a+b));
	}
	
	
	void greeting() {
		System.out.println("Welcome "+ name);
	}
	public static void main(String [] args) {
		MyClass1 obj =new MyClass1("Valan");
	}

}

//this keyword