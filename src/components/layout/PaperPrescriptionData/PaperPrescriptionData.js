import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = () => {
  return (
    <div>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejną receptę papierową'}
      >
      </Button>
    </div>
  )
}

PaperPrescriptionData.propTypes = {
  className: PropTypes.string
}

export default PaperPrescriptionData
