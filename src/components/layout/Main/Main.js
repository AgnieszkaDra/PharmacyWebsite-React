import React from 'react'
import SectionFirst from './Sections/SectionFirst'
import SectionSecond from './Sections/SectionSecond'
import SectionThird from './Sections/SectionThird'
import SectionFourth from './Sections/SectionFourth'
import drug from '../../../images/leki.webp'
import PropTypes from 'prop-types'

export const Main = (props) => {
  const {
    className
  } = props

  return (
    <main
      className={className}
    >
      <SectionFirst
        className={'section section--first'}
        image={drug}
      >
      </SectionFirst>
      <SectionSecond
        className={'section section--second'}
      >
      </SectionSecond>
      <SectionThird
        className={'section section--third'}
      >
      </SectionThird>
      <SectionFourth
        className={'section--fourth'}
      >
      </SectionFourth>
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default Main
