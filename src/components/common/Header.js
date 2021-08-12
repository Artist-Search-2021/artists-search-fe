import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: [2, 'solid', 'black'],
    padding: '1rem',
  },
  h1: {
    margin: 0,
    fontSize: '1.8rem',
  },
  link: {
    color: 'black',
    fontWeight: 600,
  }

})

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Music App</h1>
      <nav>
        <NavLink className={classes.link} to="/">Home</NavLink>
      </nav>
    </header>
  );
}

