import React from 'react'
import PropTypes from 'prop-types'

export const SectionThird = (props) => {
  const {
    className,
   
  } = props

  const listDescription = [

 
    'Złożone zamówienie nie zobowiązuje do wykupienia. Bez problemu możesz zrezygnować, wybrać zamiennik lub zrealizować kolejną receptę',
    'W razie niejasności będziemy się z Panią/Panem kontaktować drogą mailową'
  ]

  const renderListItem = (element, index) => {
    return (
      <li className={'headline--h4'} key={index}>{element}</li>
    )
  }

  return (
    <section
      className={className}
     
    >
      <h2 className={'section--third__element headline--h2'}> {'Warunki'}</h2>
       
      <ul className={'section--third__element list'}>
        {listDescription.map((item, index) => {
          return renderListItem(item, index)
        })}
      </ul>
    </section>
  )
}

SectionThird.propTypes = {
  className: PropTypes.string
}

export default SectionThird
