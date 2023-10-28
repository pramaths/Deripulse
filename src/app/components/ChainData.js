
import { useState, useEffect } from 'react';

function ChainData({ chainName }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/chains/${chainName}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [chainName]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your data here
  return (
    <div>
      {/* Display your chain data here */}
    </div>
  );
}

export default ChainData;
