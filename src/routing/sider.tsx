import getItem from './getMenuItem';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { SiderRoutes } from './types';

/**
 * Icons
 */
import { ReactComponent as ProfileCog } from '../assets/icons/InfoCustom.svg';

import { UserRoles } from 'types';
import { Dashboard } from 'views';
import Report from 'views/report';

type MenuItem = Required<MenuProps>['items'][number];

export const siderClientRoutes: Array<SiderRoutes> = [
  {
    path: 'reports',
    component: <Report />,
    label: 'Reports',
    id: 'reports',
    icon: ProfileCog,
    authenticatedUsers: [UserRoles.Client]
  },
  {
    path: 'mitre',
    component: <Dashboard />,
    label: 'Mitre',
    id: 'Mitre',
    icon: ProfileCog,
    authenticatedUsers: [UserRoles.Client]
  },
  {
    path: 'test',
    component: <></>,
    label: 'Test',
    id: 'Test',
    icon: ProfileCog,
    authenticatedUsers: [UserRoles.Client]
  }
];

/**
 * SVG css is in routesMenu.css
 */
export const siderClientMenu: MenuItem[] = siderClientRoutes.map((route, index) => {
  return getItem(
    <Link id={route.id} to={`/user/${route.index ? '' : route.path}`}>
      {route.label}
    </Link>,
    index.toString(),
    <Icon className="icon active-icon" component={route.icon}></Icon>,
    null
  );
});
