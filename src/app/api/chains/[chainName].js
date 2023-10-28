import clientPromise from '../../lib/dbConnect';

export default async (req, res) => {
    try {
      const { chainName } = req.query;
      
      const client = await clientPromise;
      const db = client.db(); 
      const collection = db.collection('wholeData'); 
  
      console.log("Connected to database and set collection");
  
      const result = await collection.findOne({}, { projection: { [`chainwise.${chainName}`]: 1 } });
      console.log("Fetched data from MongoDB:", result);
  
      const chainData = result?.chainwise?.[chainName];
  
      if (!chainData) {
        res.status(404).json({ error: 'Chain not found.' });
        return;
      }
  
      res.status(200).json(chainData);
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: 'Internal server error.' });
    }
};
