import { useState } from 'react'

export const useShowPaperPrescriptions = () => {
  // eslint-disable-next-line no-unused-vars
  const [imageSrc, setImageSrc] = useState({})
  // const [paperPrescription, setPaperPrescription] = useState([])
  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImageSrc({ firstImage: e.target.result })
      }

      reader.readAsDataURL(file)
    }
  }

  // const deletePaperPrescription = (id) => {
  //   setElectroPrescription(electronicPrescription.filter((el) => el.id !== id))
  // }

  return { imageSrc, handleFileChange }
}
