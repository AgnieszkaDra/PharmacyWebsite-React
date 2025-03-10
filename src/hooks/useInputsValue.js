import { useState } from 'react'

const useInputsValue = () => {
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
    setInputsValue({
      ...inputsValue,
      [name]: value
    })
  }

  return { inputsValue, onChangeValue }
}

export default useInputsValue
