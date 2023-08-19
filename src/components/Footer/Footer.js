import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../data/logo/drofarmaptekanamyslow.webp'

import classes from './styles.module.css'

export const Footer = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <footer
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div className={classes.logo}><img src={logo} alt=""></img></div>

    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
