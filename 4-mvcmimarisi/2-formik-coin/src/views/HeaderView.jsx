import { NavLink } from 'react-router-dom';

const HeaderView = () => {
  return (
    <header>
      <div className="h-logo">
        <img src="/c-logo.png" alt="logo" />
        <h3>Coinmania</h3>
      </div>

      <div className="links">
        <NavLink to={'/'}>Giriş Yap</NavLink>
        <NavLink to={'/home '}>Anasayfa</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
