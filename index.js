import express from "express";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
