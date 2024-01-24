import React from 'react'

import PropTypes from 'prop-types'

export const Section = (props) => {
  const {
    className,
    title,
    content
  } = props
  return (
    <section className={className}>
      <h3 className={'order__title'}>{title}</h3>
      {content}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.object
}

export default Section
