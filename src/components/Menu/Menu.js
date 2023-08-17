import React, {useState} from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { GiHamburgerMenu } from 'react-icons/gi';

export const Menu = (props) => {
  const {
    className,
    open,
    ...otherProps
  
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);

  // const handleToggle = () => {
  //   setNavbarOpen(!navbarOpen);
  // }
  // const context = React.useContext(NavbarContext);

  return (
    <nav
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {/* <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu/></button>     */}
        <ul className={`${classes.nav__menu} ${open ? '' : `${classes.nav__hide}`}`}>
            <li className={classes.nav__item}><a href="/" className={classes.nav__link}>Strona główna</a></li>
            <li className={classes.nav__item}><a href="/" className={classes.nav__link}>Kontakt</a></li>
            <li className={classes.nav__item}><a href="/" className={classes.nav__link}>Praca</a></li>
        </ul>
    </nav>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
