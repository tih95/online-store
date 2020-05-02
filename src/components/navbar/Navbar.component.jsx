import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCoffee, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <p>Tristan's Coffee</p>
        <AiOutlineCoffee />
      </Link>

      <AiOutlineMenu />

      <nav>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;