import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const ElectronicOrder = (props) => {
  const { result } = props
  console.log(result)
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
          {item.id} {/* Assuming you want to display the ID */}
          <Button text={'usuń'} />
        </div>
      ))}
    </div>
  )
}

ElectronicOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func
}

export default ElectronicOrder
