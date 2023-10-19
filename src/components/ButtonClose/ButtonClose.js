import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faXmark)
export const ButtonClose = (props) => {
  const {
    className,
    open,
    ...otherProps
  } = props



  return (

    <FontAwesomeIcon icon={faXmark}  className={`${open ? 'nav__button close' : `nav__button none `}`} />
   
  )
}

ButtonClose.propTypes = {
  className: PropTypes.string
}

export default ButtonClose
