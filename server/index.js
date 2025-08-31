const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static images from the 'schoolImages' folder
app.use("/schoolImages", express.static(path.join(__dirname, "schoolImages")));

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username, 'root' is common for XAMPP
  password: "", // Your MySQL password, empty for default XAMPP
  database: "schooldb",
});

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "schoolImages/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage: storage });

// --- API ENDPOINTS ---

// 1. Endpoint to add a new school
app.post("/api/schools", upload.single("image"), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? `schoolImages/${req.file.filename}` : null;

  const sql =
    "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [name, address, city, state, contact, email_id, image];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    return res.status(201).json({ message: "School added successfully!" });
  });
});

// 2. Endpoint to get all schools
app.get("/api/schools", (req, res) => {
  const sql = "SELECT id, name, address, city, image FROM schools";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    return res.json(data);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ✅`);
});
