import React, { useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
// import formFields from '../../../data/form/formFields'
// import { useInputsValue } from '../../../hooks/useInputsValue'
import { validateForm } from '../../features/Forms/Validate/Validate'
// import { addNewElectronicOrder } from '../../../hooks/addNewElectronicOrder'
// import { electronicOrder } from '../../../hooks/electronicOrder'
// import { useShowElectronicOrder } from '../../../hooks/useShowElectronicOrder'
import PropTypes from 'prop-types'

export const ElectronicData = (props) => {
  const { data, onChange, result } = props
  console.log(result)
  // const { addNew } = addNewElectronicOrder(data)
  // const [newOne, addElectronicElement] = useState([])
  // const addNew = () => {
  //   addElectronicElement([...newOne, { id: Date.now(), ...data }])
  // }
  // console.log(newOne)
  // const [form] = useState({
  //   PIN: '',
  //   PESEL: ''
  // })
  // const { inputsValue, onChangeValue } = useInputsValue()
  // // const { showElectronicOrder } = useShowElectronicOrder()

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
  //   console.log(form)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm(data)
    console.log(data.PIN, data.PESEL)
    errors.PIN.length > 0 ||
      errors.PESEL.length > 0
      ? setValidationErrors(errors)
      : result()
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
          value= {data.name}
          onChange={(e) => onChange(e)}
          error={validationErrors.PIN}
        >
        </Input>
        <Input
          label={'PESEL'}
          name={'PESEL'}
          id={'PESEL'}
          value={data.name}
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
  logo: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default ElectronicData
