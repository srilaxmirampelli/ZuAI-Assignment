const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./data.db", (err) => {
  if (err) {
    console.error("Error opening database", err.message);
  } else {
    console.log("Connected to the SQLite database.");

    // Create Blogs table
    db.run(
      "CREATE TABLE IF NOT EXISTS blogs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, image TEXT NOT NULL, description TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)",
      (err) => {
        if (err) {
          console.error("Error creating blogs table", err.message);
        }
      }
    );
  }
});

module.exports = db;
