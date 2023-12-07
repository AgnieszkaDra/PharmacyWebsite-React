import React, { useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/drofarmaptekanamyslow.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { GiHamburgerMenu } from 'react-icons/gi'
import Menu from '../Menu/Menu'

library.add(faXmark)

export const NavbarContext = React.createContext()
export const Header = (props) => {
  const {
    className
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <header
      className={className}
    >
      <div className={'header__logo'}>
        <img
          src={logo}
          alt={'background-tablet'}
        >
        </img>
      </div>
      <div className={'header__navigation'}>
        <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
          <button
            onClick={handleToggle}
            className={'hamburger'}
          ><GiHamburgerMenu />
          </button>
          <h3 className={'headline--h3'}>Apteka Non-Stop 2 Jelcz-Laskowice</h3>
          <Menu
            open={navbarOpen}
            openFunc={setNavbarOpen}
            className={`${isActive ? 'none' : ''}`}
          >
          </Menu>
          <FontAwesomeIcon
            icon={faXmark}
            // className={`${open ? 'open' : ''} `}
            onClick={handleClick}
          />
          {/* <ButtonClose open={navbarOpen} onClick={setNavbarOpen}>

            </ButtonClose> */}

        </NavbarContext.Provider>
      </div>

    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
