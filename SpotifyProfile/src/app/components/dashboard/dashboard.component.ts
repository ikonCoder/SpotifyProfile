import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  constructor(){ }

  code = new URLSearchParams(window.location.search).get('code');
  accessToken = "";

  isDataAvailable: boolean = false;
  user:any = {
    user_name: "DEFAULT",
    user_photo_url: "DEFAULT"
  }

  ngOnInit() {
    //code from initial api request
    if(this.code){  
      //(spotify requries body to be sent application/x-www-form-urlencoded * axios sends data by default as JSON)
      const encodedParams = new URLSearchParams();
      encodedParams.append('grant_type', 'authorization_code');
      encodedParams.append('code', this.code);
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
          this.accessToken = response.data.access_token;
          axios.get('https://api.spotify.com/v1/me', {
              headers: {
                Authorization: `Bearer ${this.accessToken}`
              }
            }
          ).then( (response: any) => {
              //assigns values from the response to the user object 
              let user2 = {
                user_name: "",
                user_photo_url: ""
              }
              this.user.user_name = response.data.display_name;
              this.user.user_photo_url = response.data.images[0].url;
              this.isDataAvailable = true;

              //testing
              // console.log(JSON.stringify(this.user));
              // console.log(response);
          })
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
    }else{console.log("Missing access code!!")}

    if(this.accessToken != ""){
      this.getRecentLikedSongs();
    }else{
      console.log("Missing access token!!")
      console.log(this.accessToken)
    }
  }

  getRecentLikedSongs() {
    console.log("here")
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      responseType: 'stream',
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })  
    .then(function (response) {
      console.log(response);
    });
  }
}
