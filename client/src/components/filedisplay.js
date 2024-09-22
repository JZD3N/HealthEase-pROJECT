import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileDisplay = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getFile = async () => {
      const response = await axios.get('/api/files/');
      setFile(response.data);
    };
    getFile();
  }, []);

  const renderFile = () => {
    if (!file) {
      return <p>No file found</p>;
    }

    return (
      <div>
        <h2>{file.originalname}</h2>
        <embed src={`/api/files/${file.filename}`} type={file.mimetype} width="100%" height="600" />
      </div>
    );
  };

  return (
    <div>
      {renderFile()}
    </div>
  );
};

export default FileDisplay;

