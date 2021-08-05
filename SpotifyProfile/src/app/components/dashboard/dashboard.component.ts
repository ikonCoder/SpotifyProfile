import { Component, OnInit } from '@angular/core';

import axios from 'axios';



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

    //check if code exist and do post req based on that
    if(code){
      axios.post('https://accounts.spotify.com/api/token', {
        headers: {
          Authorization: 'Basic NTNlMjY3OWU2M2NjNGNhZTlmNmIyNGI4MDEzZmQxNWY6YjZhODljNjM0NGI5NGU3NGIwMGJiMzMzN2U3NmM4NTI'
        },
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:4200/dashboard'
      })
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
    }else{console.log("Missing access code!!")}
  }

  ngOnInit(): void {
    
  }
}
