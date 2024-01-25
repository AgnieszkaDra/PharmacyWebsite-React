import { useState } from 'react'

export const useInputFiles = () => {
  const [inputsFiles] = useState([])
  // const [setSharedId] = useState('')
  const [fileUploadForms, setFileUploadForms] = useState([])

  // const generateId = () => {
  //   const newId = Math.floor(Math.random() * 1000)
  //   setSharedId(newId);
  // };

  // const handleAddForm = (e) => {
  //   setInputsFiles([
  //     ...inputsFiles,
  //     <FileUploadForm key={Date.now()} />
  //   ]);
  // };

  const handleAddForm = () => {
    setFileUploadForms((prevForms) => [
      ...prevForms,
      { key: fileUploadForms.length }
    ])
  }

  console.log(fileUploadForms)

  return { inputsFiles, handleAddForm, fileUploadForms, setFileUploadForms }
}
