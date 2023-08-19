import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Main = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}` }
      {...otherProps}
    >
      {children}
    </div>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main
