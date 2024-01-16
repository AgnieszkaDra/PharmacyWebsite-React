// const validatePIN = {
//     required: false,
//     pattern: "[0-9]{4}"
// },
// const reg = new RegExp(pattern);

// if(!reg.test(value)){
//     alert(`Field ${label} is invalid`);
//     setError(valParent, `${label} jest niepoprawny`)
//     errors.push('error');
// }

// export const validatePIN = (value) => (value.length !== 4 ? 'PIN must be exactly 4 characters' : '')
// export const validatePESEL = (value) => (value.length !== 11 ? 'PESEL must be exactly 11 characters' : '')

const fields = [
  {
    name: 'PIN',
    label: 'PIN recepty',
    required: true,
    pattern: /^[0-9]{4}$/,
    error: 'PIN is invalid'
  },
  {
    name: 'PESEL',
    label: 'PESEL',
    required: true,
    pattern: '[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}',
    error: 'PESEL is invalid'
  }
]

export const validateForm = (form) => {
  alert('validate')
  let errors = {
    PIN: '',
    PESEL: ''
  }

  fields.forEach((field) => {
    const { label, name, required, pattern, error: errorMessage } = field
    const value = form[name]
    console.log(value)
    if (required) {
      if (value.length === 0) {
        const error = `${label} is required!`
        errors = { ...errors, [name]: error }
      } else if (pattern) {
        const reg = new RegExp(pattern)
        if (!reg.test(value)) {
          errors = { ...errors, [name]: errorMessage }
        }
      }
    }
  })
  return errors
}
