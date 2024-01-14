import React, { useRef } from 'react'
// import { useInputStates } from '../../../hooks/useInputStates'
import PropTypes from 'prop-types'

export const Input = (props) => {
  const {
    label,
    name,
    id,
    value,
    onChange
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
      className={'input-container'}
    >
      <label
        htmlFor={'input'}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        value={value}
        type={'input'}
        name={name}
        onChange={onChange}
        // eslint-disable-next-line react/no-unknown-property
      />
      {/* {error && error.length > 0 && <Error message={error} />} */}
      {/* {hasError && <ErrorText>{errors[name]}</ErrorText>} */}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
