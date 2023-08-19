import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const ElementSecond = (props) => {
  const {
    className,
    element,
    values,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
    
      {...otherProps}
    >
      <div>
   
      </div>
      <div></div>
    </div>
  )
}

ElementSecond.propTypes = {
  className: PropTypes.string
}

export default ElementSecond
