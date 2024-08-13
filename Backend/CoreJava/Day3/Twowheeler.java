package com.vijay;

//Single Inheritance in Java
class Twowheelerr {
			void noOfwheeler() {
			System.out.println("I have two wheels");
		}
		
	}
class Bike extends Twowheelerr{
	void brandName() {
		System.out.println("Brand Name is Honds");
	}
}
public class Twowheeler {	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
    Bike bike= new Bike();
    bike.noOfwheeler();
    bike.brandName();
	}

}
