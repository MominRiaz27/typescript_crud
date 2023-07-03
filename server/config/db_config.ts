import mysql from 'mysql2/promise';
// Assuming you have the necessary connection details
const connectionOptions = {
  host: 'localhost',
  user: 'root',
  password: 'sqlpass',
  database: 'ts_db',
};

const QueryDB = async (query: string, values?: any[]) => {
  try {
    const connection = await mysql.createConnection(connectionOptions);
    const [results] = await connection.execute(query, values);
    await connection.end();
    return results;
  } catch (error) {
    // Handle the error appropriately
    console.error('Database query error:', error);
    throw error;
  }
};

export default QueryDB;
