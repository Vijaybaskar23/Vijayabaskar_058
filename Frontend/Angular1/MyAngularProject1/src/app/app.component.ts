import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  flag : boolean;
  vehicles:string[];
  selectedVehicles:string;
  myStyle: {};
  myClass:string;

  constructor(){
  this.flag=true;
  this.vehicles=["TwoWheeler","TwoWheeler","TwoWheeler"];
  this.selectedVehicles="";
  this.myStyle={'width':'40%','border':'2px solid green','border-radius':'25px'};
  this.myClass="MyClass";
  
}

changeflag(){
  this.flag=! this.flag;
}
setSelectedItem(vec :string){
  this.selectedVehicles=vec;

}

}
