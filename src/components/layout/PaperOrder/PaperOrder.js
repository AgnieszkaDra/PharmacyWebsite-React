import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const PaperOrder = (props) => {
  const { data, result, remove } = props
  console.log(result)

  const handleClick = (id) => {
    console.log(id)
    remove(id, data)
  }
  return (
    <div>
      {/* {Object.keys(result).map((item) => (
        <div key={item.id}>
          <img src={result[item]} alt="Uploaded Image" />
          <Button
            text={'usuń'}
            onClick={() => handleClick(item.id)}
          >
          </Button>
        </div>
      ))} */}
      {result.map((item) => (
        <div key={item.id}>
          <img src={item.firstImage} alt="Uploaded Image" />
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
