import React from 'react'
import Input from '../../ui/Input'
import PropTypes from 'prop-types'

export const PatientData = () => {
  return (
    <>
      <Input
        label={'Imie i nazwisko'}
        name={'name'}
        id={'name'}
      >
      </Input>
      <Input
        label={'Email'}
        name={'email'}
        id={'email'}
      >
      </Input>
    </>
  )
}

PatientData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default PatientData
