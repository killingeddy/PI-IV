const swaggerUi = require("swagger-ui-express");
const router = require("./routes/router");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(require("./swagger.json"), { customCss: CSS_URL })
);

app.use(router);

app.set("trust proxy", true);

app.listen(process.env.PORT, () => {
  console.log("_____Start_____");
  console.log(`http://localhost:${process.env.PORT}`);
});
