import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    name:string;
    age:number;
    email:string;
    imagepath:string;

    constructor(){
        this.name="value";
        this.age=38;
        this.email="vijay@gmail.com";
        this.imagepath="https://i.pinimg.com/originals/13/30/79/1330793e12fac919a307725eb713ef9d.jpg"
    }
    changename(){
     this.name="baskar";
    }
    changeage(){
      this.age=24;
    }
    changeemail(){
      this.email="baskar@gmail.com"
    }
    changeimage(){
    this.imagepath="https://64.media.tumblr.com/04699ee0a41dfa688ff2d5b0b9ce6de3/5a81eb6910ace867-24/s1280x1920/3cc2391859f993088762267e1a41f8c98c300605.jpg"
    }
  
}