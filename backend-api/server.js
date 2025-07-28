const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
//const port = 3001; // Or any other port
require('dotenv').config()
const port=process.env.port
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable JSON body parsing

// Database connection configuration
const db = mysql.createConnection({
    host: process.env.db_host, // Your database host
    user: process.env.db_user,      // Your database user
    password: process.env.db_password, // Your database password
    database: process.env.db_name, // Your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// API Routes

// // GET all area
app.get('/api/area', (req, res) => {
    const sql = 'SELECT * FROM area';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching area:', err);
            res.status(500).send('Error fetching area');
            return;
        }
        res.json(result);
    });
});
//get all machine
app.get('/api/machine', (req, res) => {
    const sql = 'SELECT * FROM machine';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(result);
    });
});
//post machine
app.post('/api/machine', (req, res) => {
    const { masterid,machine_names,area_name } = req.body;
    if (!masterid || !machine_names||!area_name) {
        return res.status(400).send('required');
    }
    const sql = 'INSERT INTO machine (masterid, machine_names,area_name) VALUES (?, ?,?)';
    db.query(sql, [masterid,machine_names,area_name], (err, result) => {
        if (err) {
            console.error('Error adding user:', err);
            res.status(500).send('Error adding user');
            return;
        }
        res.status(201).send(' added successfully');
    });
});

// POST a new area
app.post('/api/area', (req, res) => {
    const { masterid, area_name } = req.body;
    if (!masterid || !area_name) {
        return res.status(400).send('masterid and area_name are req');
    }
    const sql = 'INSERT INTO area (masterid, area_name) VALUES (?, ?)';
    db.query(sql, [masterid, area_name], (err, result) => {
        if (err) {
            console.error('Error adding data:', err);
            res.status(500).send('Error adding data');
            return;
        }
        res.status(201).send('added successfully');
    });
});

const formTableMap = {
 // VF1 Forms
 "vehicle factory1-AC OIL FM": "ac_data1",
"vehicle factory1-CLUTCH OIL FM": "clutch_data1",
"vehicle factory1-COOLANT OIL FM": "coolant_data1",
"vehicle factory1-POWER STEERING OIL FM": "powersteering_data1",
"vehicle factory1-UREA OIL FM": "urea_data1",

 // VF2 Forms
 "vehicle factory2-AC OIL FM": "ac_data2",
 "vehicle factory2-CLUTCH OIL FM": "clutch_data2",
 "vehicle factory2-COOLANT OIL FM": "coolant_data2",
 "vehicle factory2-POWER STEERING OIL FM": "powersteering_data2",
"vehicle factory2-UREA OIL FM": "urea_data2",

// VF3 Forms
"vehicle factory3-AC FM": "ac_data3",
 "vehicle factory3-CLUTCH OIL FM": "clutch_data3",
 "vehicle factory3-COOLANT OIL FM": "coolant_data3",
"vehicle factory3-POWER STEERING OIL FM": "powersteering_data3",
 "vehicle factory3-UREA OIL FM": "urea_data3",
 "vehicle factory3-DIESEL OIL FM": "diesel_data3",
};
db.query(`CREATE TABLE IF NOT EXISTS urea_data1 (
            VC_No VARCHAR(50),
            VIN_No VARCHAR(50),
            Set_Quantity REAL,       
            Actual_Quantity REAL,
            Set_Process_Time INTEGER, 
            Actual_Process_Time INTEGER,
            Result VARCHAR(50)
            
        )`, (createErr) => {
            if (createErr) {
                console.error('Error creating table:', createErr.message);
            } else {
                console.log('TABLE CREATED SUCCESFULLY!');
            }
        });
        // Generic dynamic form submission route
// This route handles POST requests for all your forms.
app.post("/api/:formName", (req, res) => {
  const { formName } = req.params; // Get the formName from the URL parameter
  const table = formTableMap[formName]; // Look up the corresponding table name

  // Check if a valid table name was found for the given formName
  if (!table) {
    console.error(
      `Invalid form name received: '${formName}'. No table mapping found.`
    );
    return res
      .status(400)
      .json({
        error: "Invalid form name. No corresponding database table found.",
      });
  }

  const data = req.body; // The form data sent from the frontend
  const fields = Object.keys(data); // Extract field names (column names)
  const values = Object.values(data); // Extract values for insertion
  const placeholders = fields.map(() => "?").join(","); // Create placeholders for the SQL query

  // Construct the SQL INSERT query dynamically
  const query = `INSERT INTO ${table} (${fields.join(
    ", " // Join fields with comma and space
  )}) VALUES (${placeholders})`;

  // Execute the query
  db.query(query, values, (err, result) => {
    if (err) {
      console.error(
        `Error inserting data into table '${table}' for form '${formName}':`,
        err
      );
      // Provide more specific error details in development for easier debugging
      return res.status(500).json({
        error: "Database error during data insertion.",
        details: err.message, // THIS IS THE KEY DETAIL FROM MYSQL
        sql: query, // The SQL query that failed
      });
    }
    console.log(
      `✅ Data successfully inserted into ${table}. Insert ID: ${result.insertId}`
    );
    res.json({ message: "✅ Data submitted successfully" });
  });
});



// Start the server
app.listen(port, () => {
    console.log(`Backend API running on http://localhost:${port}`);
});