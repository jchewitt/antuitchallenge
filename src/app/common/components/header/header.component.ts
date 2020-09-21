import { Component } from '@angular/core';

import { faBars, faBell, faCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBars = faBars;
  faBell = faBell;
  faCircle = faCircle;
  faEllipsis = faEllipsisV;
}
