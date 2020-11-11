const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/views")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});