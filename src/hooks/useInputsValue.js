import { useState } from 'react'

export const useInputsValue = () => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    email: '',
    PIN: '',
    PESEL: '',
    drugName: '',
    drugDose: '',
    drugAmount: ''
  })

  const onChangeValue = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setInputsValue({
      ...inputsValue,
      [name]: value
    })
  }

  return { inputsValue, onChangeValue }
}
