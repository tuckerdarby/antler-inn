export class MenuButton {
  name: string;
  route: string;
  selected: boolean;
}

export const MENU_BUTTONS: MenuButton[] = [
  {name: 'Home', route: 'home', selected: true},
  {name: 'Guide', route: 'guide', selected: false},
  {name: 'Reservations', route: 'reservations', selected: false},
  {name: 'Events', route: 'events', selected: false},
  {name: 'Contact', route: 'contact', selected: false},
];
