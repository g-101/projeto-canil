const express = require("express");
const dotenv = require("dotenv");
const mustache = require("mustache-express");

const path = require("path");

const mainRouters = require("./routers/main.js");

dotenv.config();
const app = express();

// TEMPLATE ENGINE
app.engine("mustache", mustache());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "/views"));

//STATIC
app.use(express.static(path.join(__dirname, "../public")));

//ROTAS
app.use(mainRouters)

app.use((req, res) => {
    res.status(404).send("Pagina não encontrada");
})

app.listen(process.env.PORT, () => console.log("http://localhost:3333"));