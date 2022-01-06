import React, { useState} from 'react';
import { ReactComponent as PlanIcon } from '../icons/flags/planet.svg';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next'
import languages from './languagedata';
import './changelng.css'

export default function ChangeLng() {
    return (
        <LngBtnItem>
            <LngDropdownMenu />
        </LngBtnItem>
    )
}


function LngBtnItem(props) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation()
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          <PlanIcon></PlanIcon>
          
        </a>
        
        
        {open && props.children}
        <span>{t('language')}</span>
      </li>
    );
  }

function LngDropdownMenu() {

    function LngDropdownItem() {
        return (
            languages.map(({ code, name, country_code, lan_icon }) => (
                
                  <a href="#"
                    key={country_code}
                    className='menu-item'
                    onClick={() => {
                      i18next.changeLanguage(code)}}>
                    <span className="icon-button"> {lan_icon} </span>
                    {name}
                  </a>
              ))
        );
    }

    return (
        <div className="dropdown">
            <LngDropdownItem />
        </div>
    )
} 
   
