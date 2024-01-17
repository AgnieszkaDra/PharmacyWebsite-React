import { useState } from 'react'

export const electronicOrder = (data) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newOne, addElectronicElement] = useState([])
  const addNew = () => {
    addElectronicElement([...data, { id: Date.now() }])
  }
  console.log(newOne)
  return { newOne, addNew }
}
