import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography/Typography'
import ElementSecond from '../ElementSecond/ElementSecond'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import classes from './styles.module.css'

const howToBook = {
  list: [
    [
      { id: 1 },
      <FontAwesomeIcon
        icon={faEnvelope}
        key={'kk'}
      />,
      { description: "Wypełnij formularz" }
    ],
    [
      { id: 2 },
      <FontAwesomeIcon
        icon={faEnvelope}
        key={'kk'}
      />,
      { description: "Potwierdź złożenie zamówienia" },
    ],
    [
      { id: 3 },
      <FontAwesomeIcon
        icon={faEnvelope}
        key={'kk'}
      />,
      { description: "Czekaj na informację o przygotowanym zamówienie i zrealizuj je w aptece" },
    ],
  ]
}

export const SectionSecond = (props) => {
  const {
    className,
    ...otherProps
  } = props

 

  const renderListItem = (element, i) => {
    return (
      <div className={classes.listContainer}>
        <div className={classes.listItemTop}>
          <div className={classes.itemNumber}>
            {element[0].id + '.'}
          </div>
          <div className={classes.itemIcon}>
            {element[1]}
          </div>
            
        </div>
        <div className={classes.listItemBottom}>
          {element[2].description}
        </div>
      </div>
    )
  }

  return (
    <section
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'h2'}
        color={'red'}
        className={classes.h2}
      >
        {'Jak to działa?'}
      </Typography>
      <div className={classes.container}>
        {howToBook.list.map((element, index) => {
          return renderListItem(element, index)
        })}
      </div>
    </section>
  )
}

SectionSecond.propTypes = {
  className: PropTypes.string
}

export default SectionSecond
