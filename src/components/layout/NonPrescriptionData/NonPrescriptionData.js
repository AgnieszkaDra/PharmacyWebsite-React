import React from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const NonPrescriptionData = () => {
  return (
    <div className={'form'}>
      <Input
        label={'Nazwa leku'}
        name={'drugName'}
        id={'drugName'}
      >
      </Input>
      <Input
        label={'Dawka'}
        name={'drugDose'}
        id={'drugDose'}
      >
      </Input>
      <Input
        label={'Ilość'}
        name={'drugAmount'}
        id={'drugAmount'}
      >
      </Input>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejny lek'}
      >
      </Button>
    </div>
  )
}

NonPrescriptionData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default NonPrescriptionData
