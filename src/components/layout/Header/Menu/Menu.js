import React from 'react'
import { useScroll } from '../../../../hooks/useScroll'
import PropTypes from 'prop-types'

export const Menu = (props) => {
  const {
    className,
    isNavbarOpen
  } = props
  const { isScrolled } = useScroll()

  return (
    <>
      <nav className={className}>
        <ul className={`${'nav__menu menu text-2xl'} ${isNavbarOpen ? `${'block'}` : `${''}`} ${isScrolled ? 'scrolled' : ''} `}>
          <li className={'menu__item p-10'}>
            <a
              href={'#contact'}
              className={'link'}
            >Kontakt
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
