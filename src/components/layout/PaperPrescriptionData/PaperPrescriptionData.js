import React from 'react'
import Button from '../../ui/Button'
import InputFile from '../../ui/InputFile'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = (props) => {
  const { onChange } = props
  return (
    <form>
      <div className={'paperInputsContainer'}>
        <div className={'inputCont'}>
          <InputFile
            onChange={(e) => onChange(e)}
          >
          </InputFile>
        </div>
      </div>
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
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default PaperPrescriptionData
