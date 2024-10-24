import { useState } from 'react'
import useInputFiles from './useInputFileValue'

const useShowPaperPrescriptions = () => {
  const [imageSrc, setImageSrc] = useState([])
  const [inputFile, setInputFile] = useState([])
  const { handleAddForm } = useInputFiles()

  const handleFileChange = (event, idFile) => {
    const file = event.target.files[0]

    if (file) {
      const objectUrl = URL.createObjectURL(file)
      setImageSrc([...imageSrc, { firstImage: objectUrl, id: idFile }])
      handleAddForm()
    }
  }

  const addPaperPrescription = (data) => {
    setImageSrc([...imageSrc, { id: Date.now(), ...data }])
  }

  const deletePaperPrescription = (id) => {
    setImageSrc(imageSrc.filter((el) => el.id !== id))
    setInputFile(inputFile.filter((el) => el.id !== id))
  }

  return {
    imageSrc,
    setImageSrc,
    handleFileChange,
    addPaperPrescription,
    deletePaperPrescription,
    inputFile
  }
}

export default useShowPaperPrescriptions
