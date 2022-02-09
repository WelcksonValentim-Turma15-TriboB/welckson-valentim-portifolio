import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>
        <h4>Quem sou eu</h4>
      </Link>
      <Link to='/contact'>
        <h4>Contato</h4>
      </Link>
    </header>
  );
}

export default Header;