import { useState } from 'react'

export const useShowPaperPrescriptions = () => {
  // eslint-disable-next-line no-unused-vars
  const [imageSrc, setImageSrc] = useState([])
  console.log(imageSrc)
  // const [paperPrescription, setPaperPrescription] = useState([])
  const handleFileChange = (event, idFile) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImageSrc([...imageSrc, { firstImage: e.target.result, id: idFile }])
      }

      reader.readAsDataURL(file)
    }
  }

  const addPaperPrescription = (data) => {
    setImageSrc([...imageSrc, { id: Date.now(), ...data }])
  }

  const deletePaperPrescription = (id) => {
    console.log(id)
    setImageSrc(imageSrc.filter((el) => el.id !== id))
    // Object.keys(imageSrc).filter((el) => el.id !== id)
  }

  const [uploadedFile, setUploadedFile] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    // Perform any additional actions on form submission
    // You can access the uploaded file through the `uploadedFile` state
    setUploadedFile(true)
  }

  // const deletePaperPrescription = (id) => {
  //   setElectroPrescription(electronicPrescription.filter((el) => el.id !== id))
  // }
  return { imageSrc, handleFileChange, addPaperPrescription, deletePaperPrescription }
}
