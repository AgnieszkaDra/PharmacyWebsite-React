import React from 'react'
import { useScroll } from '../../../hooks'
import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const Menu = (props) => {
  const { className, isNavbarOpen } = props
  const { isScrolled } = useScroll()

  return (
    <>
      <nav className={className}>
        <ul
          className={twMerge(
            'nav__menu menu text-2xl',
            isNavbarOpen ? 'block' : '',
            isScrolled ? 'scrolled' : ''
          )}
        >
          <li className={'menu__item p-10'}>
            <a
              href={'#contact'}
              className={'link'}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  isNavbarOpen: PropTypes.bool
}

export default Menu
