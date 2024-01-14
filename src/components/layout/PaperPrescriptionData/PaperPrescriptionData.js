import React from 'react'
import Form from '../../Form/Form'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = () => {
  return (
    <Form>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejną receptę papierową'}
      >
      </Button>
    </Form>
  )
}

PaperPrescriptionData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default PaperPrescriptionData
