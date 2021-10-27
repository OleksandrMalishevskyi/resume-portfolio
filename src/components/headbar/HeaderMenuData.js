import React from 'react';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';



export const HeaderMenuData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <BoltIcon />,
    iconClosed: <ArrowIcon />,
    iconOpened: <ChevronIcon />,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <PlusIcon />,
    iconClosed: <ArrowIcon />,
    iconOpened: <ChevronIcon />,
  },

  {
    title: 'Support',
    path: '/support',
    icon: <MessengerIcon />
  }
];
