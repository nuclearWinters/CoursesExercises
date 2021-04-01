import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get("/prueba.js", function (req, res) {
  res.type(".js");
  res.send(
    'const prueba = () => { return "Hola!!!!!!";}; export default prueba;'
  );
});

app.get("/Component.js", function (req, res) {
  res.type(".js");
  res.send(
    'const Component = () => { return <div>"Hola!!!!!!"</div>;}; export default Component;'
  );
});

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 80");
});
