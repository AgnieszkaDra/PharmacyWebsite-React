import React from 'react'
import PropTypes from 'prop-types'

export const Main = (props) => {
  const {
    className,
    children
  } = props

  return (
    <main
      className={className}
    >
      {children}
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object
}

export default Main
