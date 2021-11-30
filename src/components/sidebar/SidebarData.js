import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si'

export const SidebarData = [
  {
    title: 'Preview',
    path: '/',
    icon: <MdIcons.MdPreview />,
  },
  {
    title: 'Home_Page',
    path: '/home',
    icon: <AiIcons.AiFillHome />,

  },
  {
    title: 'About',
    path: '/about',
    icon: <SiIcons.SiAboutdotme />,

  },
  {
    title: 'Edu_a_Know',
    path: '/eduaknow',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Education',
        path: '/eduaknow/education',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Knowledge',
        path: '/eduaknow/knowledge',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Exp_a_Skill',
    path: '/expaskill',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Experience',
        path: '/expaskill/experience',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Skills',
        path: '/expaskill/skills',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Works(Portfolio)',
    path: '/portfolio',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <IoIcons.IoMdHelpCircle />
  },
 /*  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }, */
];

/* {
  title: 'Education',
  path: '/education',
  icon: <MdIcons.MdCastForEducation />,

}, */