import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const ElectronicOrder = (props) => {
  const { data, result, remove } = props
  console.log(result.data)
  const handleClick = (id) => {
    console.log(id, data)
    remove(id, data)
  }
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
          {item.PIN} {item.PESEL}
          {/* <Button text={'usuń'} onClick={() => handleRemove(item.id)}/> */}
          <Button
            text={'usuń'}
            onClick={handleClick(item.id)}
          >
          </Button>
        </div>
      ))}
    </div>
  )
}

ElectronicOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func,
  remove: PropTypes.func
}

export default ElectronicOrder
