import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

app.use(helmet());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(port, () => {
  console.log("Server in ascolto sulla porta " + port);
});
