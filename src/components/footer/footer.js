import React from 'react';
import { useTranslation } from 'react-i18next'


const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className='footer'>
            <h1>{t('Footer')}</h1>
        </div>
    )
}

export default Footer;