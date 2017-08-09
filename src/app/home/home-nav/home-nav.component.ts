import { Component, OnInit } from '@angular/core';
import {HomeNavButton, HOME_NAV_BUTTONS} from './home-nav.buttons';


@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  homeNavButtons: HomeNavButton[] = HOME_NAV_BUTTONS;

  constructor() { }

  ngOnInit() {
  }

}
