import React from 'react'
import Form from '../../Form/Form'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const ElectronicData = () => {
  return (
    <Form>
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
    </Form>
  )
}

ElectronicData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default ElectronicData
