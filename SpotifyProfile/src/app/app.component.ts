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

  //HTTP REQ.
  readonly ROOT_URL = '';

  constructor(private http: HttpClient) {}
}
