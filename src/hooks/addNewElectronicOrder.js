import { useState } from 'react'

export const addNewElectronicOrder = (data) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newOne, addElectronicElement] = useState([])
  const addNew = () => {
    addElectronicElement([...newOne, { id: Date.now(), ...data }])
  }
  console.log(newOne)
  return { newOne, addNew }
}
