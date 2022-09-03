const { Time } = require('../models/time.model');

//Controllers Crud

const getTimeAll = async (req, res) => {
    try {
        const times = await Time.findAll();
        res.status(200).json({
            status: 'success',
            data: {
                times
            }
        });

    } catch (error) {
        console.log(error);
    }
};

const getTime = async (req, res) => {
    try {
        const { id } = req.params;

        const time = await Time.findOne({
            where: { id }
        });

        if(!time){
            return res.status(404).json({
                status: 'Error',
                message: 'Time not Found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: { time }
        });

    } catch (error) {
        console.log(error);
    }
};

const createTimeEntrance = async (req, res) => {
    try {
        const { entranceTime } = req.body;
        
        const timeArrivals = await Time.create({ entranceTime });

        res.status(201).json({
            status: 'success',
            data: { timeArrivals },
        });

    } catch (error) {
        console.log(error);
    }
};

const updateTimeExit = async (req, res) => {
    try {
        const { exitTime } = req.body;
        const { id } = req.params;

        const exit = await Time.findOne({ where: { id } });

        if(!exit){
            return res.status(404   ).json({
                status: 'Error',
                message: 'Time not Found'
            });
        }

        await exit.update({ 
            exitTime,
            status: 'Out'
         });

        res.status(200).json({
            status: 'success',
            data: { exit } 
        });
        
    } catch (error) {
        console.log(error);
    }
};

const deleteTimeCancel = async (req, res) => {
    try {
        const { id } = req.params;

        const exit = await Time.findOne({ where: { id }});

        if(!exit){
            return res.status(404).json({
                status: 'Error',
                message: 'Time Not Found'
            });
        }

        await exit.update({ status: 'Cancelled' });

        res.status(204).json({
            status: 'success'
        });

    } catch (error) {
        console.log(error);   
    }
};

module.exports = { getTimeAll, getTime, createTimeEntrance, updateTimeExit, deleteTimeCancel };

