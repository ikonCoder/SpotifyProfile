import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class HeaderComponent implements OnInit{
  @Input() userObj: any;
  

  constructor() {}

  ngOnInit(){ 
    // testing
    // console.log(this.userObj);
  }
}
