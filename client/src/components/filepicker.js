import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FilePicker = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const handleSave = () => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    fetch('//your api for come here', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json()) 
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  const reset = () => {
    setFiles([]);
  };

  return (
    <section className="container mx-auto p-4">
      <div {...getRootProps()} className="mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
        <input {...getInputProps()} />
        {
          isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <div className="flex flex-wrap">
        {files.map(file => (
          <div key={file.name} className="w-1/2 md:w-1/3 xl:w-1/4 p-2">
            <img src={file.preview} alt={file.name} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap space-x-5 justify-end">
      <button onClick={handleSave} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Save Files
      </button>
      <button onClick={reset} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Reset
      </button>
      </div>
    </section>
  );
};

export default FilePicker;
