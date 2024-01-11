import React from 'react'
import PropTypes from 'prop-types'

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props
  return (
    <>
      <nav
        className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} `}
      >
        <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} `}>
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
  isNavbarOpen: PropTypes.bool
}

export default Menu
