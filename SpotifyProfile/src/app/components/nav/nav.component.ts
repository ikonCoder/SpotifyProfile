import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class HeaderComponent{
  @Input() userObj: any;
  username: any;

  constructor() {}

  ngOnInit(){ 
    console.log(this.userObj);
    this.username = JSON.stringify(this.userObj);
  }
}
