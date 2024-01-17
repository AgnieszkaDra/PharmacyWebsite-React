import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const ElectronicOrder = (props) => {
  const { result } = props
  console.log(result.data)
  // const removeTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // };
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
          {item.PIN} {item.PESEL}
          {/* <Button text={'usuń'} onClick={() => handleRemove(item.id)}/> */}
          <Button text={'usuń'}></Button>
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
