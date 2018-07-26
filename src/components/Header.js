import React from 'react';

const Header = ({ title, subtitle }) => (
  <header>
    <h1 className="header__title">{title}</h1>
    {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
  </header>
);

Header.defaultProps = {
  title: 'Indecision App'
};

export default Header;
