import React from 'react';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation()
  return (
    <div className='home'>
      <h1>{t('Home_Page')}</h1>
      


     
      
    </div>
  );
};

export default Home;
