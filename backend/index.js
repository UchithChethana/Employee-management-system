const express = require("express");
const dbConnection = require("./config/db")
const routes = require("./routes/employees");
const bodyParser = require("body-parser");
const corse = require("cors");

const app = express();
app.use(corse({origin :true, Credential:true}))

//DB cinnection
dbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => res.send("Hello server is running...."));

//browser eke me routes eka run krapu gamana employees eka run wenawa
app.use("/api/employees",routes)

const PORT = 3000;

app.listen(PORT, () => console.log (`server running on port ${PORT}`));

