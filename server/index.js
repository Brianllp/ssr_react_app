import React from "react";
import express from "express";
// import App from "../views/App.js";
// import { renderToString } from 'react-dom/server';

const app = express();
const port = 9000;

app.use(express.static('assets'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/", (req, res) => {
//   const html = `
//     <html>
//       <head>
//         <script src="client.js"></script>
//         <link rel="stylesheet" href="style.scss">
//       </head>
//       <body>
//           <div id="app">
//             ${renderToString(React.createElement(App))}
//           </div>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
