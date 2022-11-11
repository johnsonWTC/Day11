import { Component, OnInit } from '@angular/core';


export interface Door{
  size :number,
  color : string
}

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})



export class DoorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 door : Door[] = [{
    size :5,
    color : "Blue"
  },{
    size :10,
    color : "Red"
  },{
    size :15,
    color : "Green"
  }]

}
