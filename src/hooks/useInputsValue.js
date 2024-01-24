import { useState } from 'react'

export const useInputsValue = () => {
  const [inputsValue, setInputsValue] = useState({
    PIN: '',
    PESEL: '',
    drugName: '',
    drugDose: '',
    drugAmount: ''
  })

  const onChangeValue = (e) => {
    const { name, value } = e.target
    setInputsValue({
      ...inputsValue,
      [name]: value
    })
  }

  return { inputsValue, onChangeValue }
}
