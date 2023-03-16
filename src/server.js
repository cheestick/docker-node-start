const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Docker app");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Docker app listening on port ${PORT}`));
