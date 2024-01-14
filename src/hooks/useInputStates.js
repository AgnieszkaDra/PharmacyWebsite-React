import { useState } from 'react'

export const useInputStates = () => {
  const [form, setForm] = useState({
    username: {
      value: ''
    },
    email: {
      value: ''
    },
    pin: {
      value: ''
    },
    pesel: {
      value: ''
    }
  })

  // const pinInput = useInput('PIN', 'PIN', 'pinInput', validatePIN);
  // const peselInput = useInput('PESEL', 'PESEL', 'peselInput', validatePESEL);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: {
        ...form[name],
        val: value
      }
    })
    console.log(name, value)
  }

  return { form, handleInputChange }
}
