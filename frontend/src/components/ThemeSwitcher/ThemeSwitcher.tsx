// @ts-ignore
import cl from './ThemeSwitcher.module.scss';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  // При первом рендере компонента читаем значение из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.classList.toggle('dark', savedTheme);
  }, []);

  // Функция для изменения темы и сохранения в localStorage
  const themeChange = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle('dark', newTheme);
    localStorage.setItem('darkMode', newTheme.toString());
  };

  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <div className={cl.toggle__container}>
          <input
            onChange={themeChange}
            type="checkbox"
            id="toggle__btn"
            checked={darkMode}
            className={cl.toggle__btn}
          />
          <label htmlFor="toggle__btn" className={cl.toggle__label}></label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
