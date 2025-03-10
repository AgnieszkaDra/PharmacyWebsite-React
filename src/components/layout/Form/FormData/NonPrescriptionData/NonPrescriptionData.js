import React from 'react'
import { Button, Input } from '../../../../ui'
import { useValidationErrors } from '../../../../../hooks'
import PropTypes from 'prop-types'

const NonPrescriptionData = (props) => {
  const { data, onChange, result } = props
  const { validationErrors } = useValidationErrors()

  const handleSubmit = (e) => {
    e.preventDefault()
    result(data)
  }
  return (
    <form
      className={'form'}
      onSubmit={handleSubmit}
    >
      <Input
        label={'Nazwa leku'}
        name={'drugName'}
        id={'drugName'}
        value= {data.drugName}
        onChange={onChange}
        error={validationErrors.drugName}
      >
      </Input>
      <Input
        label={'Dawka'}
        name={'drugDose'}
        id={'drugDose'}
        value= {data.drugDose}
        onChange={onChange}
        error={validationErrors.drugDose}
      >
      </Input>
      <Input
        label={'Ilość'}
        name={'drugAmount'}
        id={'drugAmount'}
        value= {data.drugAmount}
        onChange={onChange}
        error={validationErrors.drugAmount}
      >
      </Input>
      <Button
        type={'submit'}
        className={'button__submit'}
      >
        <p>Dodaj kolejny lek</p>
      </Button>
    </form>
  )
}

NonPrescriptionData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default NonPrescriptionData
