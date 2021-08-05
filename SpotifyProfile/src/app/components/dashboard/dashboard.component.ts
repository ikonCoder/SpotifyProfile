import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    //code from api request
      const code = new URLSearchParams(window.location.search).get('code');
      console.log("Your access code is: " + code);
    
    
  }

  ngOnInit(): void {
    
  }
}
