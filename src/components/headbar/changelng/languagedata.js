import { ReactComponent as GBIcon } from '../icons/flags/gb.svg';
import { ReactComponent as DEIcon } from '../icons/flags/de1.svg';
import { ReactComponent as PLIcon } from '../icons/flags/pl.svg';
import { ReactComponent as UAIcon } from '../icons/flags/ua.svg';
import { ReactComponent as RUIcon } from '../icons/flags/ru.svg';

const languages = [
    {
      code: 'de',
      name: 'Deutsch',
      country_code: 'de',
      lan_icon: <DEIcon />
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      lan_icon: <GBIcon />
    },
    {
      code: 'pl',
      name: 'Polska',
      country_code: 'pl',
      lan_icon: <PLIcon />
    },
    {
      code: 'ua',
      name: 'Українська',
      country_code: 'ua',
      lan_icon: <UAIcon />
    },
    {
      code: 'ru',
      name: 'Русский',
      country_code: 'ru',
      lan_icon: <RUIcon />
    },
  ];

export default languages  