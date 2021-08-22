import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';


@Component({
  selector: 'nav-profile-menu',
  templateUrl: './nav-profile-menu.component.html',
  styleUrls: ['./nav-profile-menu.component.sass']
})
export class HeaderProfileMenuComponent implements OnInit {
  @Input() userObj: any;

  constructor(){}

   username!: string;
   profileImg!: string;

  ngOnInit(): void {
    this.username = this.userObj.user_name;
    this.profileImg = this.userObj.user_photo_url;

    //testing
    // console.log(JSON.stringify(newArr));
  }
}
