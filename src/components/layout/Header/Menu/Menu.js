import React from 'react'
import { useScroll } from '../../../../hooks/useScroll'
import PropTypes from 'prop-types'

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props
  const { isScrolled } = useScroll()

  return (
    <>
      <nav className={'nav'} >
        <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__block'}` : `${'nav__hide'}`} ${isScrolled ? 'scrolled' : ''} `}>
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
