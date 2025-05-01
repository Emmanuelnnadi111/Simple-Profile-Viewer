import React from 'react'
import classes from './MainHeader.module.css'
import { MdMessage, MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';


const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Simple Profile Viewer
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Profile
        </Link>
      </p>
    </header>
  );
};

export default MainHeader