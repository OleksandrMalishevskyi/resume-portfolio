import React from 'react';

import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';



const headermenudata = [
  {
    title: 'Home',
    path: '/home',
    rightIcon: <BoltIcon />,
    leftIcon: <ArrowIcon />,
    iconOpened: <ChevronIcon />,
  }
];

export default headermenudata