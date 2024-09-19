import './home.scss';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher.tsx';
import Header from '../../components/Header/Header.tsx';

const Home = () => {
  return (
    <>
      <Header />
      <div>This is home page</div>
      <ThemeSwitcher />
    </>
  );
};

export default Home;
