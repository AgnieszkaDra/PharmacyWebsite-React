import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons'


export const SectionFourth = (props) => {
  const {
    className,

  } = props

  return (

    <section
      className={className}
    >

      <div className={'section--fourth__element border--pink'}>
<FontAwesomeIcon icon={faClock} className={''} />
<strong>Apteka otwarta</strong>
            <br></br>
            Od poniedziałku do soboty
            <br></br>
            w godzinach
            <br></br>
            od < span > 8:00 do 20:00</span >
            </div>
        
        <div className={'section--fourth__element border--pink'}>
           <FontAwesomeIcon icon={faMortarPestle} className={''} />
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
  
    </section>
  )
}

SectionFourth.propTypes = {
  className: PropTypes.string
}

export default SectionFourth
