import React, { useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import formFields from '../../../data/form/formFields'
import { validateForm } from '../../features/Forms/Validate/Validate'
import PropTypes from 'prop-types'

export const ElectronicData = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    pin: '',
    pesel: ''
  })

  // const [validationErrors, setValidationErrors] = useState({
  //   email: '',
  //   username: '',
  //   password: '',
  //   pin: '',
  //   pesel: ''
  // }
  // )

  const handleChange = (e, fieldName) => {
    const { value } = e.target
    setForm({
      ...form,
      [fieldName]: { value }
    })
    console.log(e.target.value.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm(form)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          formFields.electronicPrescriptionForm.map((field) => (
            <div key={field.name}>
              <Input
                label={field.label}
                name={field.name}
                id={field.name}
                value={form[field.name]?.value || ''}
                onChange={(e) => handleChange(e, field.name)}
                // errors={validationErrors.name}
              >
              </Input>
            </div>
          ))
        }
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
