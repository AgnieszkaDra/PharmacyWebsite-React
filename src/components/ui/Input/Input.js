import React, { useRef } from 'react'
// import { useInputStates } from '../../../hooks/useInputStates'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

export const Input = (props) => {
  const {
    label,
    name,
    id,
    value,
    onChange,
    error
  } = props

  // const { form, handleInputChange } = useInputStates()
  // const useFormInput = (initialValue) => {
  //   const [value, setValue] = useState(initialValue)
  //   const handleChange = (e) => {
  //     setValue(e.target.value)
  //   }
  //   return {
  //     value,
  //     onChange: handleChange
  //   }
  // }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }
  // const state = useFormInput('')

  // const useFormInput = (initialValue) => {
  //   const [value, setValue] = useState(initialValue)
  //   const handleChange = (e) => {
  //     setValue(e.target.value)
  //   }
  //   return {
  //     value,
  //     onChange: handleChange
  //   }
  // }
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div
      onClick={handleClick}
      className={'form__field'}
    >
      <label
        htmlFor={'input'}
        className={'form__label'}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        value={value}
        className={'form__input'}
        type={'input'}
        name={name}
        onChange={onChange}
        // eslint-disable-next-line react/no-unknown-property
      />
      {error && error.length > 0 && <Error message={error} />}
      {/* {hasError && <ErrorText>{errors[name]}</ErrorText>} */}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default Input
