import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = () => {
  return (
    <form>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejną receptę papierową'}
      >
      </Button>
    </form>
  )
}

PaperPrescriptionData.propTypes = {
  className: PropTypes.string
}

export default PaperPrescriptionData
