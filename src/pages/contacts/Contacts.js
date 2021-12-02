import React from 'react';
import { useTranslation } from 'react-i18next'


const Contacts = () => {
    const { t } = useTranslation()
    return (
        <div className='contacts'>
            <h1>{t('Contacts')}</h1>
        </div>
    )
}

export default Contacts
