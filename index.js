const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

let Companies = require('./models/companies');

require('dotenv').config();

// Setup Mongoose

const MONGO_URI = process.env.IS_PROD.length ? process.env.MONGO_PROD_HOST : process.env.MONGO_TEST_HOST ;

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
	.catch(e => console.log(e));
let db = mongoose.connection;
db.on('error', (err) => {
  console.log(err);
});

// Setup App and BodyParser
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// GET Paths
app.get('/', (req, res) => {
	console.log('page opened');
	res.send('hello');
});

app.get('/company/:id', (req, res) => {
	Companies.findById(req.params.id)
	.then((found) => {
		res.send(found);
	})
});



// POST Paths
app.post('/company/add', (req, res) => {
	let company = new Companies();
	Object.assign(company, req.body);
  company.save((err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send('success');
    }
  	return;
	});
});

// Functions


let port = 51515;
if (process.env.IS_PROD === 'true') {
	// TODO
}

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});