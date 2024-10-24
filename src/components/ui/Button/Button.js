import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {
    type,
    className,
    onClick,
    children
  } = props

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string
}

export default Button
