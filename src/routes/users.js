 
import { Router } from 'express';
import client from '../config/scylladb';

const router = Router();
 
router.route('/').get(async function(req, res, next) {

  try {
    const query = 'SELECT * FROM tableflow.import_rows limit 100'; // Replace with your keyspace and table
    const result = await client.execute(query);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'An error occurred' });
  }
  
});

export default router;
