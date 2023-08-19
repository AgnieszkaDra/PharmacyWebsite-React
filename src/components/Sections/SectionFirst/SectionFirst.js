import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const SectionFirst = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <>
     <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
       <h2 class="section__headline section__headline--h2">Złóż rezerwację na leki i odbierz je w aptece
                </h2>
                <h3 class="section__headline section__headline--h3">W celu złożenia rezerwacji wypełnij formularz
                </h3>
                <button class="section__button-container"> 
                  
                         <a class="section__button__link" href="./form.html" id="myHref">
                        Złóż zamówienie
                    </a> 
                
                  
                </button>
    </div>
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h4>dnjkfndkja</h4>
    </div>
    </>

  )
}

SectionFirst.propTypes = {
  className: PropTypes.string
}

export default SectionFirst
