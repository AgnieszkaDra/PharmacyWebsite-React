import { useState } from 'react'

const useValidationErrors = () => {
  const [validationErrors, setValidationErrors] = useState({
    PIN: '',
    PESEL: '',
    drugName: '',
    drugDose: '',
    drugAmount: ''
  }
  )

  const onSetErrors = (e) => {
    setValidationErrors({
      ...validationErrors,
      e
    })
  }

  return { validationErrors, onSetErrors }
}

export default useValidationErrors
