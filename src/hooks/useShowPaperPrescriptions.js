import { useState } from 'react'
import FileUploadForm from '../components/ui/FileUploadForm';

export const useShowPaperPrescriptions = () => {
  // eslint-disable-next-line no-unused-vars
  const [imageSrc, setImageSrc] = useState([])
  const [inputFile, setInputFile] = useState([])
  const [inputsFiles, setInputsFiles] = useState([]);
  const [sharedId, setSharedId] = useState('');

  const generateId = () => {
    const newId = Math.floor(Math.random() * 1000);
    setSharedId(newId);
  };

  const handleAddForm = () => {
    setInputsFiles([
      ...inputsFiles,
      <FileUploadForm key={Date.now()} />
    ]);
  };

  // const [sharedId, setSharedId] = useState(10)
  console.log(imageSrc)
  // const [paperPrescription, setPaperPrescription] = useState([])
  const handleFileChange = (event, idFile) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      // reader.onload = (e) => {
      //   setImageSrc([...imageSrc, { firstImage: e.target.result, id: idFile }])
      // }
      reader.onload = (e) => {
        setImageSrc([...imageSrc, { firstImage: e.target.result }])
      }

      reader.readAsDataURL(file)
    }
  }

  const addInputFileWithId = (e) => {
    alert('id')
    setInputFile([...inputFile])
  }

  const addPaperPrescription = (data) => {
    setImageSrc([...imageSrc, { id: Date.now(), ...data }])
  }

  const deletePaperPrescription = (id) => {
    console.log(id)
    setImageSrc(imageSrc.filter((el) => el.id !== id))
    setInputFile(inputFile.filter((el) => el.id !== id))
    // Object.keys(imageSrc).filter((el) => el.id !== id)
  }

  // const deletePaperPrescription = (id) => {
  //   setElectroPrescription(electronicPrescription.filter((el) => el.id !== id))
  // }

  console.log(imageSrc)
  return { imageSrc, setImageSrc, handleFileChange, addPaperPrescription, deletePaperPrescription, inputFile, addInputFileWithId }
}
