import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const howToBook = {
  list: [
    {
      id: 1,
      icon: faEnvelope,
      description: "Wypełnij formularz" 
    },
   
    {
      id: 2,
      icon: faEnvelope,
      description: "Potwierdź złożenie zamówienia" 
    },
      {
        id: 3,
        icon: faEnvelope,
        description: "Czekaj na informację o przygotowanym zamówienie i zrealizuj je w aptece"
      }
  
  ]
}

export const SectionSecond = (props) => {
  const {
    className
  } = props

  const renderListItem = (element, index) => {
    return (
      <div className={'order__sub'} key={index}>
        <div className={'order__sub__icon'}>
          <div className={'number'}>
            {element.id + '.'}
          </div>
          
          <FontAwesomeIcon icon={element.icon}  ></FontAwesomeIcon>   
       
            
        </div>
        <div className={''}>
          {element.description}
        </div>
      </div>
    )
  }

  return (
    <section
      className={className}
    >
      <h2 className={'section--second__element headline--h2'}>Jak to działa?</h2>
      <div className={'section--second__element order'}>
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
