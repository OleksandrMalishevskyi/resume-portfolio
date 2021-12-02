import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation()
    return (
        <div className='experience'>
            <h1>{t('Experience')}</h1>
        </div>
    )
}

export default Experience;