import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography/Typography'
import Section from '../../Section/Section'
// import variables from '../../../styles/abstracts'
// import styles from '../../../styles/abstracts/_export.module.scss'
import classes from './styles.module.css'

export const SectionFirst = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <>
      <section
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        {...otherProps}
      >
        <div className='border--pink'>
            <Typography
          variant={'h2'}
          color={'red'} ///how to import from abstarcts
          className={classes.h2}
        >
          {'Złóż rezerwację na leki i odbierz je w aptece'}
        </Typography>
        <Typography
          variant={'h3'}
          color={'black'} ///how to import from abstarcts
          className={classes.h3}
        >
          {'W celu złożenia rezerwacji wypełnij formularz'}
        </Typography>
        <button>
          <a className={classes.link} href="./form.html" id="myHref">
            Złóż zamówienie
          </a>
        </button>
        </div>
         
     
        <div
        className={`${classes.mobileNone}${className ? ` ${className}` : ''}`}
        {...otherProps}
      >
      </div>
      </section>
     
    </>

  )
}

SectionFirst.propTypes = {
  className: PropTypes.string
}

export default SectionFirst
