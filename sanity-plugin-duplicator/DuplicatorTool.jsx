// sanity-plugin-duplicator/DuplicatorTool.jsx
import React, { useState } from 'react';
import { duplicateDocuments } from './Duplicator';

const DuplicatorTool = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(null);

  const handleDuplicate = async () => {
    setStatus('Duplicating documents...');
    try {
      const result = await duplicateDocuments(query);
      setStatus(`Successfully duplicated ${result.length} documents`);
    } catch (error) {
      setStatus('Error duplicating documents: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Duplicator Tool</h1>
      <textarea
        placeholder="Enter GROQ query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleDuplicate}>Duplicate</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default DuplicatorTool;
