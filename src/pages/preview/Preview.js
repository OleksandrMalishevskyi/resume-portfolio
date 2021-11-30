import React from 'react';
import { useTranslation } from 'react-i18next'


const Preview = () => {
  const { t } = useTranslation()
  return (
    <div className='preview'>
      <h1>{t('Preview')}</h1>
      


     
      
    </div>
  );
};

export default Preview;
