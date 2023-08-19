import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons'

import classes from './styles.module.css'

export const SectionFourth = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (

    <footer
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

      <div className='border--pink'>
        <Typography
          variant={'h2'}
          color={'red'}
          className={classes.h2}
        >
          {'Apteka Non-Stop Jelcz-Laskowice'}
        </Typography>
        <div className={classes.boxContainer}>
          <div className={classes.box}>
            <FontAwesomeIcon icon={faClock} className={classes.icon} />
            <strong>Apteka otwarta</strong>
            <br></br>
            Od poniedziałku do soboty
            <br></br>
            w godzinach
            <br></br>
            od < span > 8:00 do 20:00</span >
          </div >
          <div className={classes.box}>
          <FontAwesomeIcon icon={faMortarPestle} className={classes.icon} />
            <strong>
              Apteka
              <br></br>
              Non-Stop
              <br></br>
              Jelcz-Laskowice
            </strong>
            <br></br>
            ul. Józefa Bożka 9
            <br></br>
            55-220 Jelcz-Laskowice
            <br></br>
            tel. <span>89078990</span>
          </div>
        </div>
      </div>
    </footer >
  )
}

SectionFourth.propTypes = {
  className: PropTypes.string
}

export default SectionFourth
