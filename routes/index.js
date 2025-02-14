const express = require("express");
const router = express.Router();
const { sql } = require("../db");

// Get all waste data
router.get("/waste", async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM WasteAnalysis ORDER BY Timestamp DESC");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send("Error fetching data: " + err.message);
    }
});

module.exports = router;
