import React from 'react'
import Button from '../../../../ui/Button'
import PropTypes from 'prop-types'

export const PaperOrder = (props) => {
  const { data, result, remove } = props
  const handleClick = (id, rem) => {
    remove(id, data)
  }
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
          <img
            src={item.firstImage}
            alt={'Uploaded'}
          />
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

PaperOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func,
  remove: PropTypes.func
}

export default PaperOrder
