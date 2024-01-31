import React from 'react'
import Button from '../../../../ui/Button'
import PropTypes from 'prop-types'

export const NonPrescriptionOrder = (props) => {
  const { data, result, remove } = props
  const handleClick = (id) => {
    remove(id, data)
  }
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
          {item.drugName} {item.drugDose} {item.drugAmount}
          <Button
            text={'usuń'}
            onClick={() => handleClick(item.id)}
          >
          </Button>
        </div>
      ))}
    </div>
  )
}

NonPrescriptionOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func,
  remove: PropTypes.func
}

export default NonPrescriptionOrder
