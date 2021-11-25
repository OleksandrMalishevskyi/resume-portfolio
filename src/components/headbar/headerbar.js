import './headbar.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';



import React, { useState, useEffect, useRef, Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import headermenudata from './headermenudata'

import ChangeLng from './changelng/changelng';




function HeaderBar() {

 
  return (
    <Navbar>
      <ChangeLng />
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  class DropdownItem extends Component {
    
    renderLinks(){
      return headermenudata.map((props, index) => {
        return (
          <NavLink to={props.path}
           key={index}
           className="menu-item" 
           onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.title}
            <span className="icon-right">{props.rightIcon}</span>
          </NavLink>
        )
     })
    }
    render() {
      return (
        <>
          {this.renderLinks() }
        </>
      )
    }
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
        <DropdownItem />

        


        </div>
      </CSSTransition>




    </div>
  );
}

export default HeaderBar;
