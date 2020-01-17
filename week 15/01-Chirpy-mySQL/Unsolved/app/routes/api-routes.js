// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/api/all", (req, res) => {
  const query = "select * from chirps;";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(404).end();
    }
    console.log('result', result);
    res.json(result);
  })
})

  // Add a chirp
app.post("/api/new", (req, res) => {
const query = "insert into chirps (author, body, created_at) values (?,?,?)";
connection.query(query, [req.body.author, req.body.body, req.body.created_at], (err, result) => {
  if (err) {
    throw err;
  }
  res.status(200).end();
})
})

};
