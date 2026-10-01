const Pool = require('pg').Pool
const pool = new Pool({
    user: 'teknokl1_apipg',
    host: '176.74.18.130',
    database: 'teknokl1_api',
    password: 'PR!y{@t++fh*',
    port: 5432,
})

async function db(sql) {
    try {
        const client = await pool.connect();
        const result = await client.query(sql);
        const data = result.rows;
        client.release();
        return data;
    } catch (error) {
        throw error

    }
}
module.exports = db;