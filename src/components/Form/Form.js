import React from 'react'

import PropTypes from 'prop-types'

export const Form = ({ children }, props) => {
  const {
    className
  } = props
  return (
    <form className={className}>
      {children}
    </form>
  )
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default Form
