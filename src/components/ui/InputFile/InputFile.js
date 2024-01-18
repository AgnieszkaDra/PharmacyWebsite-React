import React from 'react'
// import { useInputStates } from '../../../hooks/useInputStates'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

export const InputFile = (props) => {
  const {
    label,
    name,
    id,
    value,
    onChange,
    error
  } = props

  return (
    <div
      className={'form__field'}
    >
      <label
        htmlFor={'input'}
        className={'form__label'}
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        className={'form__input'}
        type={'file'}
        name={name}
        onChange={onChange}
        // eslint-disable-next-line react/no-unknown-property
      />
      {error && error.length > 0 && <Error message={error} />}
      {/* {hasError && <ErrorText>{errors[name]}</ErrorText>} */}
    </div>
  )
}

InputFile.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default InputFile
