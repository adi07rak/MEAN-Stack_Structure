const express = require('express');
const app = express();
const config = require('config');
const router = express.Router();
const bodyParser = require("body-parser");

const port = config.get("port");

const routes = require("./routes/test.route");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use(router);
// routes.initialize(app);
app.use("/something",routes);

app.listen(port, 'localhost',()=>{
    console.log('Server is running on port :',port);
});