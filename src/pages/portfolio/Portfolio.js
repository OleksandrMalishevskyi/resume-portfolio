import React from 'react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const { t } = useTranslation()
    return (
        <div className='portfolio'>
            <h1>{t('Works')}</h1>
        </div>
    )
}

export default Portfolio;