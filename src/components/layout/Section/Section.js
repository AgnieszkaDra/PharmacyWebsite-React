import React from 'react'

import PropTypes from 'prop-types'

export const Section = (props) => {
  const {
    className,
    title,
    background,
    children
  } = props

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <section
      className={`${className} section`}
      style={style}
    >
      <h3 className={'order__title'}>{title}</h3>
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.any
}

export default Section
