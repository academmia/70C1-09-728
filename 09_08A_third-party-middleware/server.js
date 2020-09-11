const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const validator = require('express-validator');

const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));

// consume API
app.use('/api', routes);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
