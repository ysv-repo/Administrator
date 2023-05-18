import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  navigationLinks: NavigationLinks[] = ELEMENT_DATA;
}

export class NavigationLinks {
  linkName: string;
  linkUrl: string;
  linkIcon: string;
}

const ELEMENT_DATA: NavigationLinks[] = [
  { linkName: 'Dashboard', linkUrl: '/dashboard', linkIcon: 'fa fa-home' },
  { linkName: 'Users', linkUrl: '/users', linkIcon: 'fa fa-user' },
  { linkName: 'InlineEdit', linkUrl: '/users/inlineEdit', linkIcon: 'fa fa-edit' },
  { linkName: 'Dynamic Table', linkUrl: '/dashboard/dynamicTable', linkIcon: 'fa fa-table' },

];
