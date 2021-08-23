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

   dropdownStatus = false;
   username!: string;
   profileImg!: string;

  ngOnInit(): void {
    this.username = this.userObj.user_name;
    this.profileImg = this.userObj.user_photo_url;
    //testing
    // console.log(JSON.stringify(newArr));
  }

  navMenuToggle(){
      let dropdown = document.getElementsByClassName('dropdown') as HTMLCollectionOf<HTMLElement>;

      if(this.dropdownStatus){
        dropdown[0].style.display="none";
        this.dropdownStatus = false;
        console.log("dropdown is..: " + this.dropdownStatus);
      }else{
        this.dropdownStatus = true;
        dropdown[0].style.display="block";
        console.log("dropdown is..: " + this.dropdownStatus);
      }
  }
}