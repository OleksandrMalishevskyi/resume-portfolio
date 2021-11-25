import React from 'react';
import { useTranslation } from 'react-i18next'


const Home = () => {
  const { t } = useTranslation()
  return (
    <div className='home'>
      <h1>{t('welcome_message')}</h1>
      


     
      
    </div>
  );
};

export default Home;
