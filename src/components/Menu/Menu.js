import React from 'react'
import { useScroll } from '../../hooks/useScroll'
import PropTypes from 'prop-types'

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props
  const { isScrolled } = useScroll()

  return (
    <>
      {/* <nav
        className={`nav ${open ? 'nav__block' : ''} ${className}`}

      > */}
      <nav className={'nav'} >
        {/* <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu/></button>     */}
        {/* <ul className={'nav__menu menu '}> */}
        <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} ${isScrolled ? 'scrolled' : ''} `}>
          <li className={'menu__item'}>
            <a
              href={'/'}
              className={'link'}
            >Strona główna
            </a>
          </li>
          <li className={'menu__item'}>
            <a
              href={'/'}
              className={'link'}
            >Kontakt
            </a>
          </li>
          <li className={'menu__item'}>
            <a
              href={'/'}
              className={'link'}
            >Praca
            </a>
          </li>
          {/* <FontAwesomeIcon icon={faXmark} className={"nav__button close"} onClick={handleToggle}/> */}
        </ul>
      </nav>
    </>

  )
}

Menu.propTypes = {
  className: PropTypes.string,
  isNavbarOpen: PropTypes.string
}

export default Menu
