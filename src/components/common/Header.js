import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Music App</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
}

