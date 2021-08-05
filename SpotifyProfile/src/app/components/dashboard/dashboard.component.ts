import { Component, OnInit } from '@angular/core';

import axios from 'axios';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    //code from initial api request
    const code = new URLSearchParams(window.location.search).get('code');

    if(code){
      //(spotify requries body to be sent application/x-www-form-urlencoded * axios sends data by default as JSON)
      const encodedParams = new URLSearchParams();
      encodedParams.append('grant_type', 'authorization_code');
      encodedParams.append('code', code);
      encodedParams.append('redirect_uri', 'http://localhost:4200/dashboard');

      axios.post('https://accounts.spotify.com/api/token', encodedParams ,
        {
          headers: {
            //Auth format = Authorization: Basic *<base64 encoded client_id:client_secret>*
            Authorization: 'Basic NTNlMjY3OWU2M2NjNGNhZTlmNmIyNGI4MDEzZmQxNWY6YjZhODljNjM0NGI5NGU3NGIwMGJiMzMzN2U3NmM4NTI'
          }
        }
      )
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
    }else{console.log("Missing access code!!")}
  }

  ngOnInit(): void {}
}
