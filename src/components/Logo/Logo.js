import React from 'react'
import PropTypes from 'prop-types'

export const Logo = (props) => {
  const {
    className
  } = props

  return (
    <h1
      className={className}
    >
      <img
        alt={'logo'}
        src={props.logo}
      >
      </img>
    </h1>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default Logo
