import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    type,
    className,
    text
  } = props

  return (
    <button
      className={className}
      type={type}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string
}

export default Button
