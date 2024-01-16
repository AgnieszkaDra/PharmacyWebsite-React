import React, { useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
// import formFields from '../../../data/form/formFields'
import { useInputsValue } from '../../../hooks/useInputsValue'
import { validateForm } from '../../features/Forms/Validate/Validate'
import PropTypes from 'prop-types'

export const ElectronicData = () => {
  // const [form, setForm] = useState({
  //   PIN: '',
  //   PESEL: ''
  // })
  const { inputsValue, onChangeValue } = useInputsValue()

  // eslint-disable-next-line no-unused-vars
  const [validationErrors, setValidationErrors] = useState({
    PIN: '',
    PESEL: ''
  }
  )

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setForm({
  //     ...form,
  //     [name]: value
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm(inputsValue)
    console.log(errors)
    errors.PIN.length > 0 ||
    errors.PESEL.length > 0
      ? setValidationErrors(errors)
      : alert('Form is sent successfully')
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={'form'}
      >
        {/* {
          formFields.electronicPrescriptionForm.map((field) => (
            <div key={field.name}>
              <Input
                label={field.label}
                name={field.name}
                id={field.name}
                value={form[field.name]?.value || ''}
                onChange={(e) => handleChange(e, field.name)}
                error = {validationErrors[field.name]?.error || ''}
                // errors={validationErrors.name}
              >
              </Input>
            </div>
          ))
        } */}
        <Input
          label={'PIN'}
          name={'PIN'}
          id={'PIN'}
          value={inputsValue.name}
          onChange={(e) => onChangeValue(e)}
          error={validationErrors.PIN}
        >
        </Input>
        <Input
          label={'PESEL'}
          name={'PESEL'}
          id={'PESEL'}
          value={inputsValue.name}
          onChange={(e) => onChangeValue(e)}
          error={validationErrors.PESEL}
        >
        </Input>
        <Button
          type={'submit'}
          className={'button__submit'}
          text={'Dodaj kolejną receptę elektroniczną'}
        >
        </Button>
        {/* <Input
          label={'PESEL'}
          name={'PESEL'}
          id={'PESEL'}
        >
        </Input> */}
      </form>
    </>
  )
}

ElectronicData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default ElectronicData
