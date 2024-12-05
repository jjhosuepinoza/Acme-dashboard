import { db } from '@vercel/postgres';

async function getInvoicesByAmount() {
  const client = await db.connect();

  try {
    const result = await client.sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;
    
    return result.rows;  // returns the rows from the query result
  } catch (error) {
    console.error('Error executing query:', error);
    throw error; // rethrow the error so it can be handled by the caller
  } finally {
    client.release(); // Ensure the client connection is released after use
  }
}

