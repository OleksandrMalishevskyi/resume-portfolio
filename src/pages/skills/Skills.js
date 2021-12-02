import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation()
    return (
        <div className='skills'>
            <h1>{t('Skills')}</h1>
        </div>
    )
}

export default Skills;