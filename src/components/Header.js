import React from 'react';

const Header = ({ title, subtitle }) => (
  <header
    style={{
      background: '#335',
      color: '#fff',
      marginBottom: '10px',
      padding: '10px 0 5px 10rem'
    }}
  >
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </header>
);

Header.defaultProps = {
  title: 'Indecision App'
};

export default Header;
