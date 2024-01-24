import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const TopControl = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`topcontrol ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <div className={'topcontrol__container'}>
        <div className={'topcontrol__icon'}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
    </div>
  )
}

export default TopControl
