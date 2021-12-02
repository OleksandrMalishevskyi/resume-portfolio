import React from 'react';
import { useTranslation } from 'react-i18next';

const Knowledge = () => {
    const { t } = useTranslation()
    return (
        <div className='knowledge'>
            <h1>{t('Knowledge')}</h1>
        </div>
    )
}

export default Knowledge;