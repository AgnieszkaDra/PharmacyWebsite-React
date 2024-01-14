export const formFields = {

  electronicPrescriptionForm: [
    {
      value: '',
      name: 'PIN',
      label: 'PIN recepty',
      required: false,
      pattern: '[0-9]{4}'
    },
    {
      value: '',
      name: 'PESEL',
      label: 'PESEL',
      required: false,
      pattern: '[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}'
    }
  ]
}

export default formFields
