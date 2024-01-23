import { useState } from 'react'
import FileUploadForm from '../components/ui/FileUploadForm';

export const useInputFiles = () => {
  const [inputsFiles, setInputsFiles] = useState([]);

  const handleAddForm = () => {
    setInputsFiles([
      ...inputsFiles,
      <FileUploadForm key={Date.now()} />
    ]);
  };

  return { inputsFiles, handleAddForm };
};