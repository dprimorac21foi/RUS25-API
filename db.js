require("dotenv").config();  // Load environment variables from .env
const sql = require("mssql");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    database: process.env.DB_NAME,
    port: 1433,  // Ensure port 1433 is used
    options: {
        encrypt: true, // Required for Azure SQL
        enableArithAbort: true
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log("✅ Connected to Azure SQL Database");
    } catch (err) {
        console.error("❌ Database connection failed:");
        console.error("Error Code:", err.code);
        console.error("Error Message:", err.message);
    }
}

module.exports = { sql, connectDB };
