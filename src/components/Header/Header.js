import React, { useState } from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import logo from '../../data/logo/drofarmaptekanamyslow.webp'
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from '../Menu/Menu'
import Typography from '../Typography/Typography';

export const NavbarContext = React.createContext();
export const Header = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);

   const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <div
      className={`${classes.root}`}
      {...otherProps}
    >
      <div className={classes.header__back}>
        <div className={`${classes.header__container}${className ? ` ${className}` : ''}`} >
          <div className={classes.header__logo}>
            <img
              src={logo}
              alt="background-tablet"
            >
            </img>
          </div>
          <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
            <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu /></button>
            <div className={classes.name__top}>
              <Typography
                variant={'h4'}
              >
                Apteka Non-Stop 2  Jelcz-Laskowice
              </Typography>
            </div>
            <Menu open={navbarOpen} openFunc={setNavbarOpen}></Menu>
          </NavbarContext.Provider>
        </div>

      </div>

    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
