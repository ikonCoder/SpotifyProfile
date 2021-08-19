import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { 
  }

  user = {
    user_name: "",
    user_photo_url: ""
  };
 
  ngOnInit() {
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
      .then( (response: any) => {
        if(response.status == 200){
           //send GET request to /v1/me endpoint to get user data w/ access token
          const accessToken = response.data.access_token;
          axios.get('https://api.spotify.com/v1/me', {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          ).then( (response: any) => {
              console.log(response);
              //assigns values from the response to the user object 
              this.user.user_name = response.data.display_name;
              this.user.user_photo_url = response.data.images[0].url;
          })
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
    }else{console.log("Missing access code!!")}
  }
}
