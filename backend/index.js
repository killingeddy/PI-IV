const swaggerUi = require("swagger-ui-express");
const router = require("./routes/router");
import swaggerJsDoc from "swagger-jsdoc";
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "SaveYourPlace API",
      description: "API for SaveYourPlace application",
      version: "1.0.0",
      contact: {
        name: "Eddie Medrado",
        email: "eddiemedradorocha@gmail.com",
      },
    },
    servers: [
      {
        url: "https://client-5g3g.onrender.com",
        description: "Production server",
      },
      {
        url: "http://localhost:2311",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/router.js"],
};

const specs = swaggerJsDoc(options);

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCss: CSS_URL })
);

app.use(router);

app.set("trust proxy", true);

app.listen(process.env.PORT, () => {
  console.log("_____Start_____");
  console.log(`http://localhost:${process.env.PORT}`);
});
