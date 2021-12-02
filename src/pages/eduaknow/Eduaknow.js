import React from 'react';
import { useTranslation } from 'react-i18next';

const Eduaknow = () => {
    const { t } = useTranslation()
    return (
        <div className='eduaknow'>
            <h1>{t('Edu_a_Know')}</h1>
        </div>
    )
}

export default Eduaknow;