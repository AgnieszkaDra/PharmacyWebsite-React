import React from 'react'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'

export const NonPrescriptionOrder = (props) => {
  const { result } = props
  console.log(result.data)
  // const removeTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // };
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
          {item.drugName}{item.drugDose}{item.drugAmount}
          {/* <Button text={'usuń'} onClick={() => handleRemove(item.id)}/> */}
          <Button text={'usuń'}></Button>
        </div>
      ))}
    </div>
  )
}

NonPrescriptionOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func
}

export default NonPrescriptionOrder
