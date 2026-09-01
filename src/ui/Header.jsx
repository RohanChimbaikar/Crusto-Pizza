import React from 'react';
import { Link } from 'react-router-dom';

import SearchOrder from '../features/order/SearchOrder';
import Logo from './Logo';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="bg-espresso text-cream flex h-20 items-center justify-between px-4 py-3 sm:px-6">
      <Link to="/">
        <Logo />
      </Link>

      <SearchOrder />
      <Username/>
    </header>
  );
};

export default Header;
