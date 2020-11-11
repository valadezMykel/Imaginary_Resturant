const path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/tables.html"));
  });

  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/reservations.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/index.html"));
  });
};