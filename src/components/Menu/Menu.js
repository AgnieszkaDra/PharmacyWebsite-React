import React from 'react'
import PropTypes from 'prop-types'

export const Menu = (props) => {
  const {
    className,
    open
  } = props

  return (
    <>
      <nav
        className={`nav ${open ? 'nav__block' : ''} ${className}`}

      >
        {/* <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu/></button>     */}
        <ul className={'nav__menu menu '}>
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
  open: PropTypes.string
}

export default Menu
