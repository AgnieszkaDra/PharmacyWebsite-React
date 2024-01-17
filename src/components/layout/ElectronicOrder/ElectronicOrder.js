import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const ElectronicOrder = (props) => {
  const { data, result } = props
  return (
    <div>
      {
        result ?
          <div>{data.PIN} {data.PESEL} <Button text={'usuń'} ></Button></div>
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
