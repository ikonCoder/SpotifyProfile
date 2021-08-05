import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None //had to add this to get SASS file let me style the body tag

})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

    //Spotify Auth. URL -> points to auth endpoint
    AUTH_URL: string = "https://accounts.spotify.com/authorize?client_id=53e2679e63cc4cae9f6b24b8013fd15f&response_type=code&redirect_uri=http://localhost:4200%2Fdashboard&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
}
