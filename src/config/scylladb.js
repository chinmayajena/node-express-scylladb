import 'dotenv/config';
const { Client, types } = require('cassandra-driver');

const distance = types.distance;

const {
    SCYLLA_HOST, 
} = process.env;


const client = new Client({
    contactPoints: [SCYLLA_HOST],
    localDataCenter:'datacenter1',
    keyspace: 'users',
    pooling: {
      coreConnectionsPerHost: {
        [distance.local]: 2,
        [distance.remote]: 1,
      },
    },
  });
  
// Connect to ScyllaDB
client.connect()
  .then(() => {
    console.log('Connected to ScyllaDB');
  })
  .catch((err) => {
    console.error('Error connecting to ScyllaDB:', err);
  });

export default client;