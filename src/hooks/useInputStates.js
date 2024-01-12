import { useState } from 'react'

export const useInputStates = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    message: ''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return { form, handleInputChange }
}
