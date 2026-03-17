import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';

if (!env.MYSQL_URI) {
    throw new Error('Invalid/Missing environment variable: "MYSQL_URI"');
}

let pool: mysql.Pool;

export async function getDb() {
    if (!pool) {
        pool = mysql.createPool({
            uri: env.MYSQL_URI,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // Initialize table if it doesn't exist
        const connection = await pool.getConnection();
        try {
            await connection.execute(`
                CREATE TABLE IF NOT EXISTS waitlist (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    company VARCHAR(255),
                    createdAt DATETIME NOT NULL
                )
            `);
        } finally {
            connection.release();
        }
    }
    return pool;
}
