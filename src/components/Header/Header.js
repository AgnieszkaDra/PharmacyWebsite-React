import React, { useState, useEffect } from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import logo from '../../data/logo/drofarmaptekanamyslow.webp'

import PropTypes from 'prop-types'

export const Header = (props) => {
  const {
    className
  } = props
  const logoImage = logo

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${className}${scrolled ? ' scrolled' : ''}`}>
      <Logo
        className={'header__logo'}
        logo={logoImage}
      >
      </Logo>
      <div
        className={'header__navigation'}
      >
        <Navigation></Navigation>
      </div>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
