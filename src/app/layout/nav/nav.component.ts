import {Component, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {MenuButton, MENU_BUTTONS} from './nav.buttons';
import {MdIconRegistry, MdIcon} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [MdIconRegistry]
})
export class NavComponent implements OnInit {
  menuButtons: MenuButton[] = MENU_BUTTONS;
  selectedButton: MenuButton = MENU_BUTTONS[0];

  constructor(public media: ObservableMedia) {
  }

  ngOnInit() {
  }

  onSelect(btn: MenuButton) {
    this.selectedButton.selected = false;
    this.selectedButton = btn;
    this.selectedButton.selected = true;
  }

}
