import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day11';
  showButton = false;
  innerValue = "hide table"
  
  ShowAndHideButton(){
    if(this.showButton){
      this.showButton = false;
      this.innerValue = "hide table"
    }else{
      this.showButton = true;
      this.innerValue = "show table"
    }
  }
}
