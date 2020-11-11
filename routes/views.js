const path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/tables.html"));
  });

  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/reservations.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
};