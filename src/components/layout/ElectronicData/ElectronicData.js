import React from 'react'
import Form from '../../Form/Form'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const ElectronicData = () => {
  return (
    <>
      <Form>
        <Input
          label={'PIN'}
          name={'PIN'}
          id={'PIN'}
        >
        </Input>
        <Input
          label={'PESEL'}
          name={'PESEL'}
          id={'PESEL'}
        >
        </Input>
        <Button
          type={'submit'}
          className={'button__submit'}
          text={'Dodaj kolejną receptę elektroniczną'}
        >
        </Button>
      </Form>
    </>
  )
}

ElectronicData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default ElectronicData
