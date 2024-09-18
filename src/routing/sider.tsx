import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import getItem from './getMenuItem';

import {
  Backup,
  Check,
  DashboardCustom,
  Fingerprint,
  Lock,
  Microsoft,
  Monitor,
  PrivilegeLogo,
  Secure
} from 'assets/icons';
import { UserRoles } from 'types';

import AppHardening from 'views/appHardening';
import AppWhiteListing from 'views/appWhiteListing';
import DailyBackups from 'views/dailyBackups';
import MacroMSOffice from 'views/macroMSOffice';
import MFA from 'views/mfa';
import PatchApplication from 'views/patchApp';

import AppDashboard from 'views/dashboard';
import PatchOS from 'views/patchOS';
import Report from 'views/report';
import RestrictPrivilege from 'views/restrictPrivilege';
import ProfileCog from '../assets/icons/InfoCustom.svg?react';
import { SiderRoutes } from './types';

/**
 * Icons
 */

type MenuItem = Required<MenuProps>['items'][number];

export const siderClientRoutes: Array<SiderRoutes> = [
  {
    path: 'dashboard',
    component: <AppDashboard />,
    label: 'Dashboard',
    id: 'dashboard',
    index: true, // index will create it first route when navigating to /
    icon: DashboardCustom,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'reports',
    component: <Report />,
    label: 'Logs',
    id: 'logs',
    icon: ProfileCog,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-whitelisting',
    component: <AppWhiteListing />,
    label: 'App Whitelisting',
    id: 'App Whitelisting',
    icon: Monitor,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-app',
    component: <PatchApplication />,
    label: 'Patch App',
    id: 'Patch App',
    icon: Secure,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'ms-macro',
    component: <MacroMSOffice />,
    label: 'Macro MS Office',
    id: 'Macro MS Office',
    icon: Microsoft,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-hardening',
    component: <AppHardening />,
    label: 'App Hardening',
    id: 'App Hardening',
    icon: Lock,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'mfa',
    component: <MFA />,
    label: 'MFA',
    id: 'MFA',
    icon: Fingerprint,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-os',
    component: <PatchOS />,
    label: 'Patch OS',
    id: 'Patch OS',
    icon: Check,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'restrict-privilege',
    component: <RestrictPrivilege />,
    label: 'Restrict Priviledges',
    id: 'Restrict Priviledges',
    icon: PrivilegeLogo,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'daily-backup',
    component: <DailyBackups />,
    label: 'Daily Backups',
    id: 'Daily Backups',
    icon: Backup,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  }
];

/**
 * SVG css is in routesMenu.css
 */
export const siderClientMenu: MenuItem[] = siderClientRoutes.map((route, index) => {
  // index will have default route so must be replaced
  return getItem(
    <Link id={route.id} to={`/user/${route.index ? '' : route.path}`}>
      {route.label}
    </Link>,
    index.toString(),
    <Icon className="icon active-icon" component={route.icon}></Icon>,
    null,
    undefined,
    route.disabled
  );
});
