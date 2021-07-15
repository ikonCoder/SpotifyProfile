import { Component } from '@angular/core';
import { ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None //had to add this to get SASS file let me style the body tag
})
export class AppComponent {
  title = 'SpotifyProfile';

  //Spotify Auth. URL -> points to auth endpoint
   AUTH_URL: string = "https://accounts.spotify.com/authorize?client_id=53e2679e63cc4cae9f6b24b8013fd15f&response_type=code&redirect_uri=http://localhost:4200&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
}
