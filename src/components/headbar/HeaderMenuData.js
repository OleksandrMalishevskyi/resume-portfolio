import React from 'react';

import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as EarthIcon } from './icons/flags/planet.svg';



const headermenudata = [
  {
    title: 'Home',
    path: '/home',
    rightIcon: <BoltIcon />,
    leftIcon: <ArrowIcon />,
    iconOpened: <ChevronIcon />,
  },
  {
    title: 'Language',
    path: '#',
    rightIcon: <BoltIcon />,
    leftIcon: <EarthIcon />,
    iconOpened: <ChevronIcon />,
  }
];

export default headermenudata