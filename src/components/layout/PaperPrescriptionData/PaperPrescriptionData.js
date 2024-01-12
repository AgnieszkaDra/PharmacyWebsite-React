import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = () => {
  return (
    <>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejną receptę papierową'}
      >
      </Button>
    </>
  )
}

PaperPrescriptionData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default PaperPrescriptionData
