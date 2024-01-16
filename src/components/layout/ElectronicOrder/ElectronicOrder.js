import React from 'react'
import { useInputsValue } from '../../../hooks/useInputsValue'
import PropTypes from 'prop-types'

export const ElectronicOrder = () => {
  const { inputsValue } = useInputsValue()
  console.log(inputsValue)
  return (
    <div>
      <div>{inputsValue.PIN}</div>
      <div>{inputsValue.PESEL}</div>
    </div>
  )
}

ElectronicOrder.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default ElectronicOrder
