const express = require('express');

//Routers
const { timesRouter } = require('./routes/time.routes');

// Init our Express app
const app = express();

//Enable Express app to receive JSON data
app.use(express.json());

//Times
app.use('/api/v1/registrations', timesRouter);

//Catch non-existing endPoints
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'Error',
        message: `${req.method} ${req.url} does not exists in our server`
    });
});

module.exports = { app };