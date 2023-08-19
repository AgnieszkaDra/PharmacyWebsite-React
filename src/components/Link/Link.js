import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Link = (props) => {
  const {
    className,
    values
  } = props
  return (
    <>
      <a
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        // href={`//${values}`}
        href={`${values}`}
        target={'blank'}
      >
        {values}
      </a>
    </>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  values: PropTypes.string
}

export default Link
