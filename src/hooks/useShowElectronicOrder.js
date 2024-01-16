import { useState } from 'react'

export const useShowElectronicOrder = () => {
  const [electronicOrder, setShowElectronicOrder] = useState(false)
  const showElectronicOrder = () => {
    setShowElectronicOrder(!electronicOrder)
  }

  return { electronicOrder, showElectronicOrder }
}
