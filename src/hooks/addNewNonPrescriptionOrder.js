import { useState } from 'react'

export const addNewNonprescriptionOrder = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newOneNon, addElectronicElement] = useState([])
  const addNewNon = (data) => {
    addElectronicElement([...newOneNon, { id: Date.now(), ...data }])
  }
  return { newOneNon, addNewNon }
}
