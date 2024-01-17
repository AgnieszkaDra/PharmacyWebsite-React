import { useState } from 'react'

export const addNewElectronicOrder = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newOne, addElectronicElement] = useState([])
  const addNew = (data) => {
    addElectronicElement([...newOne, { id: Date.now(), ...data }])
  }
  console.log(newOne)
  return { newOne, addNew }
}
