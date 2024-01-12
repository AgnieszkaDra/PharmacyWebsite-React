import React from 'react'

import PropTypes from 'prop-types'

export const Form = (props) => {
  const {
    className
  } = props
  return (
    <form className={className}>
    </form>
  )
}

Form.propTypes = {
  className: PropTypes.string
}

export default Form
