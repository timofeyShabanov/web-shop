// @ts-ignore
import cl from './Header.module.scss';

const Header = () => {
  return (
    <div className={cl.container}>
      <div className={cl.nav}>
        <div className={cl.nav__item}>
          <span className={cl.nav__span}>
            <img src="/img/Favorite.svg" alt="Favorite" /> Favorite
          </span>
        </div>
        <div className={cl.nav__item}>
          <span className={cl.nav__span}>
            <img src="/img/ShoppingСart.svg" alt="Cart" /> Cart
          </span>
        </div>
        <div className={cl.nav__item}>
          <span className={cl.nav__span}>
            <img src="/img/Union.svg" alt="Profile" /> Profile
          </span>
        </div>
      </div>
      <div className={cl.logo__container}>
        <img src="/img/logo2.png" alt="logo" className={cl.logo} />
      </div>
      <hr />
    </div>
  );
};

export default Header;
