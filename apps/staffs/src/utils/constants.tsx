export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Users',
    path: '/users',
  },
  {
    title: 'Satistics',
    path: '/statistics',
  },
];
