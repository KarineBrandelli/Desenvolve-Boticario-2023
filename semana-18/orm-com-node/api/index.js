const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const port = 5010;

app.use(cors());
routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`));

module.exports = app;

// sudo mysql -u root -p (iniciar o banco no projeto)
