import React, { useState } from 'react'
import Button from '../../ui/Button'
import InputFile from '../../ui/InputFile'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = (props) => {
  const { onChange } = props
  const [uploadedFile, setUploadedFile] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    // Perform any additional actions on form submission
    // You can access the uploaded file through the `uploadedFile` state
    setUploadedFile(true)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={'paperInputsContainer'}>
        <div className={'inputCont'}>
          {uploadedFile ?
            <InputFile
              // onChange={(e) => onChange(e, Date.now())}
              // onChange={onChange}
              name={'fileInput'}
              onChange={(e, id) => onChange(e, id)}
            >
            </InputFile>
            : ''
          }
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
