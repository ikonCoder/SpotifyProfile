import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';


@Component({
  selector: 'nav-profile-menu',
  templateUrl: './nav-profile-menu.component.html',
  styleUrls: ['./nav-profile-menu.component.sass']
})
export class HeaderProfileMenuComponent implements OnInit {

  constructor(private DashboardComponent: DashboardComponent){}

   getDashboardVar(): void {
    const variable = this.DashboardComponent.user_name;
    console.log(variable);
   }

  ngOnInit(): void {}

}
