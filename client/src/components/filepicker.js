import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

//TODO: Fix GlobalWorker Service
//TODO: Fix the error message when no file is selected
//TODO Implement CRUD functionality
//TODO: Send files to database

const FileUpload = ({ onFileUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      onFileUpload(acceptedFiles[0]);
    },
  });

  return (
    <div className="p-4 border-2 border-dashed border-gray-400 rounded-md">
      <div {...getRootProps({ className: 'text-center cursor-pointer' })}>
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag 'n' drop a file here, or click to select a file
        </p>
      </div>
    </div>
  );
};

/**
 * 
 * 
 * This component allows users to upload a file and displays the uploaded file as a PDF.
 * 
 * @returns {JSX.Element} The rendered FilePicker component.
 */
const FilePicker = () => {
  // State to hold the uploaded file
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div className="container mx-auto p-4">
      {/* FileUpload component to handle file uploads */}
      <FileUpload onFileUpload={setUploadedFile} />
      {/* DocumentViewer component to display the uploaded file as a PDF */}
      {uploadedFile && (
        <Document file={uploadedFile}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default FilePicker;

