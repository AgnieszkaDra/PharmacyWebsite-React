import React from 'react'

import PropTypes from 'prop-types'

export const FormElement = ({ children }, props) => {
  const {
    className
  } = props
  return (
    <form className={className}>
      {children}
    </form>
  )
}

FormElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default FormElement
