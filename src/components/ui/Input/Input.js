import React, { useRef } from 'react'
import { useInputStates } from '../../../hooks/useInputStates'
import PropTypes from 'prop-types'

export const Input = (props) => {
  const {
    label,
    name,
    id
  } = props

  const { form, handleInputChange } = useInputStates()

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
        value={form.label}
        type={'input'}
        name={name}
        onChange={handleInputChange}
      />
      {/* {error && error.length > 0 && <Error message={error} />} */}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string
}

export default Input
