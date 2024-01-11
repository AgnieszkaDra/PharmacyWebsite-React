import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import logo from '../../data/logo/drofarmaptekanamyslow.webp'

import PropTypes from 'prop-types'

export const HeaderSecond = (props) => {
  const {
    className
  } = props
  const logoImage = logo
  return (
    <header className={className}>
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

HeaderSecond.propTypes = {
  className: PropTypes.string
}

export default HeaderSecond
