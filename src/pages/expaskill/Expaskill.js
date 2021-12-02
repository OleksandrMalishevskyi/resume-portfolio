import React from 'react';
import { useTranslation } from 'react-i18next';

const Expaskill = () => {
    const { t } = useTranslation()
    return (
        <div className='expaskill'>
            <h1>{t('Exp_a_Skil')}</h1>
        </div>
    )
}

export default Expaskill;