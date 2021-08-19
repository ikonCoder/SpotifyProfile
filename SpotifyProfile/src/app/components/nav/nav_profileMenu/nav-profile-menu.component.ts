import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';


@Component({
  selector: 'nav-profile-menu',
  templateUrl: './nav-profile-menu.component.html',
  styleUrls: ['./nav-profile-menu.component.sass']
})
export class HeaderProfileMenuComponent implements OnInit {
  @Input() username: any;

  constructor(){}

  ngOnInit(): void {
    console.log("username: " + this.username);
  }
}
