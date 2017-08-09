export class HomeNavButton {
  name: string;
  route: string;
}

export const HOME_NAV_BUTTONS: HomeNavButton[] = [
  {name: 'Make Reservations', route: '/reservations'},
  {name: 'Visit the Wild West', route: '/guide'},
  {name: 'Yellow Stone', route: '/guide'},
  {name: 'Accommodations', route: '/guide'}
];
