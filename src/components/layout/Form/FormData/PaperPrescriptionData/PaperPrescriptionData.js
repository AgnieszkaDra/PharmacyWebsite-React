import React from 'react'
import Button from '../../../../ui/Button'
import { useInputFiles } from '../../../../../hooks/useInputFileValue'
import PropTypes from 'prop-types'

export const PaperPrescriptionData = (props) => {
  const { onChange } = props
  // const { fileUploadForms, setFileUploadForms } = useState([]);
  const { fileUploadForms, setFileUploadForms } = useInputFiles()

  const handleAddForm = () => {
    setFileUploadForms((prevForms) => [
      ...prevForms,
      { key: fileUploadForms.length }
    ])
  }

  const handleRemoveForm = (index) => {
    const updatedForms = [...fileUploadForms]
    updatedForms.splice(index, 1)
    setFileUploadForms(updatedForms)
  }

  return (
    <>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejną receptę elektroniczną'}
        onClick={handleAddForm}
      />

      {fileUploadForms.map((formData, index) => (
        <div key={formData.key}>
          <form>
            {/* Other form fields can go here */}

            <label htmlFor={'fileInput'}>Select a file:</label>
            <input
              type={'file'}
              id={'fileInput'}
              multiple
              name={'fileInput'}
              onChange={(e) => onChange(e)}
            />

            {/* Submit button */}
            <input
              type={'submit'}
              value={'Upload'}
            />
          </form>
          <button onClick={() => handleRemoveForm(index)}>Remove Form</button>
        </div>
      ))}
    </>
  )
}

PaperPrescriptionData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default PaperPrescriptionData
