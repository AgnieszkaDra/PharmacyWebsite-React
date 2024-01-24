import React from 'react'
import Logo from '../../../ui/Logo/Logo'
import Navigation from '../Navigation/Navigation'
import TopControl from '../../../ui/TopControl'
import { useScroll } from '../../../../hooks/useScroll'
import logo from '../../../../images/drofarmaptekanamyslow.webp'

import PropTypes from 'prop-types'

export const Header = (props) => {
  const {
    className
  } = props
  const logoImage = logo

  const { isScrolled } = useScroll()
  return (
    <header className={`${className}${isScrolled ? ' scrolled' : ''}`}>
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
      <TopControl></TopControl>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
