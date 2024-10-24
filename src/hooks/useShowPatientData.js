import { useState } from 'react'

const useShowPatientData = () => {
  const [patientData, setPatientData] = useState([])
  const addPatientData = (data) => {
    setPatientData([...patientData, { id: Date.now(), ...data }])
  }

  const deletePatientData = (id) => {
    setPatientData(patientData.filter((el) => el.id !== id))
  }

  return { patientData, addPatientData, deletePatientData }
}

export default useShowPatientData
