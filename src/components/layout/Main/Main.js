import React from 'react'
import Section from '../Section/Section'
import { NavLink } from 'react-router-dom'
import drug from '../../../images/leki.webp'
import PropTypes from 'prop-types'
import Typography from '../../ui/Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMortarPestle } from '@fortawesome/free-solid-svg-icons'

export const Main = (props) => {
  const {
    className
  } = props

  const toPage = (value) => {
    return `/${value}`
  }

  const listDescription = [
    'Złożone zamówienie nie zobowiązuje do wykupienia. Bez problemu możesz zrezygnować, wybrać zamiennik lub zrealizować kolejną receptę',
    'W razie niejasności będziemy się z Panią/Panem kontaktować drogą mailową'
  ]

  const renderListItem = (element, index) => {
    return (
      <li
        className={'headline--h4'}
        key={index}
      >
        {element}
      </li>
    )
  }

  return (
    <main
      className={className}
    >
      <div className={'flex justify-between'}>
        <Section
          className={'border--pink'}
        >
          <Typography
            variant={'h2'}
            className={'color--main'}
          >
            Złóż rezerwację na leki i odbierz je w aptece
          </Typography>
          <Typography variant={'h3'}>
            W celu złożenia rezerwacji wypełnij formularz
          </Typography>
          <button
            className={'button'}
          >
            <NavLink
              className={'link'}
              to={toPage('form')}
            >
              Złóż zamówienie
            </NavLink>
            <a
              className={'link'}
              href={'./form.html'}
              id={'myHref'}
            >
            </a>
          </button>
        </Section>
        <Section
          background={drug}
          className={'section border--pink'}
        />
      </div>
      <div className={'mt-6'}>
        <Typography
          variant={'h2'}
          className={'color--main text-center'}
        >
          Warunki
        </Typography>
        <ul className={'list'}>
          {listDescription.map((item, index) => {
            return renderListItem(item, index)
          })}
        </ul>
      </div>
      <div className={'flex justify-between'}>
        <Section
          className={'border--pink flex justify-center items-center'}
        >
          <div>
            <FontAwesomeIcon
              icon={faClock}
              className={'icon'}
            />
            <Typography
              variant={'strong'}
              className={'strong'}
            >
              Apteka otwarta
            </Typography>
            <br></br>
            Od poniedziałku do soboty
            <br></br>
            w godzinach
            <br></br>
            od < span > 8:00 do 20:00</span >
          </div>
        </Section>
        <Section
          className={'border--pink flex justify-center items-center'}
        >
          <div>
            <FontAwesomeIcon
              icon={faMortarPestle}
              className={'icon'}
            />
            <Typography
              variant={'strong'}
              className={'strong'}
            >
              Apteka
              <br></br>
              Non-Stop
              <br></br>
              Jelcz-Laskowice
            </Typography>
            <br></br>
            ul. Józefa Bożka 9
            <br></br>
            55-220 Jelcz-Laskowice
            <br></br>
            tel. <span>89078990</span>
          </div>
        </Section>
      </div>
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default Main
