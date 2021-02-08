import { Component } from '@angular/core';


import { MenuLinks } from 'src/app/shared/_consts/menu-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {


  readonly links = MenuLinks;


  constructor() {}


}
