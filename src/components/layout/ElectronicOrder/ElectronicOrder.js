import React from 'react'
import { useInputsValue } from '../../../hooks/useInputsValue'
import { useShowElectronicOrder } from '../../../hooks/useShowElectronicOrder'

import PropTypes from 'prop-types'

export const ElectronicOrder = (props) => {
  const { inputsValue } = useInputsValue()
  console.log(inputsValue)
  const { data } = props
  console.log(data)
  const { electronicOrder } = useShowElectronicOrder()
  return (
    <div>
      {
        electronicOrder ?
          <><div>{inputsValue.PIN}</div><div>{inputsValue.PESEL}</div></>
          : ''
      }
      <p>Count: {data.PIN}</p>
    </div>
  )
}

ElectronicOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string
}

export default ElectronicOrder
