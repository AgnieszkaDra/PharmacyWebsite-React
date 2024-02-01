import React, { useState } from 'react'
import Input from '../../../../ui/Input'
import Button from '../../../../ui/Button'
// import formFields from '../../../data/form/formFields'
// import { useInputsValue } from '../../../hooks/useInputsValue'
import { validateForm } from '../../../../../components/features/Forms/Validate/Validate'
// import { useValidationErrors } from '../../../../../hooks/useValidationErrors'
// import { addNewElectronicOrder } from '../../../hooks/addNewElectronicOrder'
// import { electronicOrder } from '../../../hooks/electronicOrder'
// import { useShowElectronicOrder } from '../../../hooks/useShowElectronicOrder'
import PropTypes from 'prop-types'

export const ElectronicData = (props) => {
  const { data, onChange, result } = props
  const [validationErrors, setValidationErrors] = useState({
    PIN: '',
    PESEL: ''
  }
  )

  const handleSubmit = (e) => {
    validationErrors.PIN = ''
    validationErrors.PESEL = ''
    e.preventDefault()
    const errors = validateForm(data)
    console.log(errors.PIN, errors.PESEL)
    errors.PIN.length > 0 ||
      errors.PESEL.length > 0
      ? setValidationErrors(errors)
      : result(data)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={'form'}
      >
        <Input
          label={'PIN'}
          name={'PIN'}
          id={'PIN'}
          value= {data.PIN}
          onChange={(e) => onChange(e)}
          error={validationErrors.PIN}
        >
        </Input>
        <Input
          label={'PESEL'}
          name={'PESEL'}
          id={'PESEL'}
          value={data.PESEL}
          onChange={(e) => onChange(e)}
          error={validationErrors.PESEL}
        >
        </Input>
        <Button
          type={'submit'}
          className={'button__submit'}
          text={'Dodaj kolejną receptę elektroniczną'}
        >
        </Button>
      </form>
    </>
  )
}

ElectronicData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default ElectronicData
