require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var routes = require('./routes/apiRoutes');

const app = express();

const port = 3336;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb', extended: true
}));

app.use(express.static(path.join(__dirname, '../clinics_test-assessment/out/')));
app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT || `${port}`, () => {
  console.log(`Server Ivan Running at ${port} 🚀`);
});