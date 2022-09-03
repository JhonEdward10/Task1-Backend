const express = require('express');

const timesRouter = express.Router();

//Controllers Exports

const { getTimeAll, getTime, createTimeEntrance, updateTimeExit, deleteTimeCancel } = require('../controllers/time.controller');

//Crud
timesRouter.get('/', getTimeAll); //Get All

timesRouter.get('/:id', getTime); //Get Id

timesRouter.post('/', createTimeEntrance); //Post

timesRouter.patch('/:id', updateTimeExit); //Patch

timesRouter.delete('/:id', deleteTimeCancel);

module.exports = { timesRouter };