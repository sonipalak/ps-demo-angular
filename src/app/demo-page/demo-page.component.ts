import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
  
price = "20";

today = Date();

data = 10;
updateVale(){
  this.data = Math.floor(Math.random()*10)
}

productName = "iPhone"
productPrice = 500
productDetails = "Senior Web Designer seeking roles in ui development,ux design,web development,user interface designing."

userDetails=[
  {name:'Astha Khan', email:'maraj.akanksha@hotmail.com', phone:'+91 02 01800091'},
  {name:'Hassan Aurora', email:'zhari@mitter.net', phone:'+91 61 96270839'},
  {name:'Taahid Prabhu', email:'narmada72@yahoo.com', phone:'0731 4482444'},
  {name:'Pranay Ramakrishnan', email:'padmini.nagi@edwin.in', phone:'+91 54 52487416'},
  {name:'Nishi Datta', email:'sen.sushant@suri.com', phone:'065 12098442'},
  {name:'Teena Mogul', email:'divya.walia@patil.co.in', phone:'+91 27 25838178'}
]

count = 100;
status: boolean = true;
countAdd(){
  this.count = this.count + 1;
  this.status = !this.status;
  
}

likeCount: number = 100;
isClassToggled: boolean = false;
  like() {
    this.likeCount++;
    this.isClassToggled = !this.isClassToggled;
  }





}
