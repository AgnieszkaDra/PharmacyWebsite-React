import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography/Typography'

import classes from './styles.module.css'

export const SectionThird = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const listDescription = [

  
    'Złożone zamówienie nie zobowiązuje do wykupienia. Bez problemu możesz zrezygnować, wybrać zamiennik lub zrealizować kolejną receptę',
    'W razie niejasności będziemy się z Panią/Panem kontaktować drogą mailową'
  ]

  const renderListItem = (element, i) => {
    return (
      <li className={classes.element}>{element}</li>
    )
  }

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
        <Typography
        variant={'h2'}
        color={'red'}
        className={classes.h2}
      >
        {'Warunki'}
      </Typography>
      <ul className={classes.list}>
        {listDescription.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
    </div>
  )
}

SectionThird.propTypes = {
  className: PropTypes.string
}

export default SectionThird
