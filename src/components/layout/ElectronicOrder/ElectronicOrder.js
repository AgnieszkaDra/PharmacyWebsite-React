import React from 'react'
import PropTypes from 'prop-types'

export const ElectronicOrder = (props) => {
  const { data, result } = props
  return (
    <div>
      {
        result ?
          <><div>{data.PIN}</div><div>{data.PESEL}</div></>
          : ''
      }
    </div>
  )
}

ElectronicOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.bool,
  onChange: PropTypes.func
}

export default ElectronicOrder
