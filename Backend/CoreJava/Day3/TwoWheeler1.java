package com.vijay;

class Vehicles {
	void noOfEngine() {
		System.out.println("I Have Two wheeler");
    }
}

 class TwoWheeler extends Vehicles {
	 void noOfwheele() {
		 System.out.println("brand name is honda");
	 }
 }
 class bike extends TwoWheeler{
	 void brandname() {
		 System.out.println("Brand name is honda");
	 }
	 
 }
 class Scooty extends TwoWheeler{
	 void brandname() {
		 System.out.println("brand name is honda");
	 }
 }
  public class TwoWheeler1{
	  public static void main(String []args) {
		  bike b=new bike();
		  b.noOfwheele();
		  b.brandname();
		  b.noOfEngine();
		  Scooty s=new Scooty();
		  s.noOfwheele();
		  s.brandname();
		  s.noOfEngine();
	  }
  }