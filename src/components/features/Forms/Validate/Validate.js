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
    required: false,
    pattern: /^[0-9]{4}$/,
    error: 'PIN is invalid'
  },
  {
    name: 'PESEL',
    label: 'PESEL',
    required: false,
    pattern: '[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}',
    error: 'PESEL is invalid'
  }
]

export const validateForm = (form) => {
  fields.forEach(function (field) {
    const { name, pattern = null } = field
    const value = form[name]
    const trimmedValue = value.trim()
    console.log(value)
    // if (pattern.test(trimmedValue)) {
    //   const reg = new RegExp(pattern.test(trimmedValue))
    //   if (!reg.test(trimmedValue)) {
    //     // alert(`Field ${label} is invalid`);
    //     // setError(valParent, `${label} jest niepoprawny`)
    //     // errors.push('error');
    //     alert('wrong')
    //   } else {
    //     alert('ok')
    //   }
    // }
    if (pattern.test(trimmedValue)) {
      console.log('Match')
    } else {
      console.log('No match')
    }
  })
}
