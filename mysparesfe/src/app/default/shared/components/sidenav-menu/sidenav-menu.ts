import { SidenavMenu } from './sidenav-menu.model';

export const sidenavMenuItems = [
    new SidenavMenu (1, 'Home', '/', null, null, false, 0),
    new SidenavMenu (35, 'Body', '/products/body', null, null, false, 30),
    new SidenavMenu (40, 'Accessories', null, null, null, true, 2),
    new SidenavMenu (51, 'Electronics', '/products/electronics', null, null, false, 0),
    new SidenavMenu (52, 'Motors', '/products/motors', null, null, false, 0),
    new SidenavMenu (60, 'Pages', null, null, null, true, 0),
    new SidenavMenu (61, 'All products', '/products', null, null, false, 60),
    new SidenavMenu (62, 'Product detail', '/products/2/PC All-in-One', null, null, false, 60),
    new SidenavMenu (63, 'Sign in', '/sign-in', null, null, false, 60),
    new SidenavMenu (64, '404 Error', '/404', null, null, false, 60),
    new SidenavMenu (80, 'Contact', '/contact', null, null, false, 0),
    new SidenavMenu (140, 'Level 1', null, null, null, true, 0),
    new SidenavMenu (141, 'Level 2', null, null, null, true, 140),
    new SidenavMenu (142, 'Level 3', null, null, null, true, 141),
    new SidenavMenu (143, 'Level 4', null, null, null, true, 142),
    new SidenavMenu (144, 'Level 5', null, 'http://tinyUrl.com', null, false, 143),
    new SidenavMenu (200, 'External Link', null, 'http://tinyUrl.com', '_blank', false, 0)
];
