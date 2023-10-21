import express from "express";
import ssr from "./views/ssr.js";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(express.static('assets'));

app.get("/ssr_sample", (req, res) => {
  const response = ssr();
  res.send(response);
});

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
