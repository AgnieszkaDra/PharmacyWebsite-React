import { useState } from 'react'

export const useValidationErrors = (error) => {
  const [validationErrors, setValidationErrors] = useState({
    PIN: '',
    PESEL: '',
    drugName: '',
    drugDose: '',
    drugAmount: ''
  }
  )

  const onSetErrors = (e) => {
    setValidationErrors(error)
  }

  return { validationErrors, onSetErrors }
}
