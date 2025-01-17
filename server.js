import express from "express";


const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(port, () => {
  console.log("Server in ascolto sulla porta " + port);
});
