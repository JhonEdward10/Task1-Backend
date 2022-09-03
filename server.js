const { app } = require('./app');
const { db } = require('./utils/database.util');

const starServer = async() => {
    try {
        await db.authenticate();
        await db.sync();

        //Listeng Port

        const PORT = 4000;

        app.listen(PORT, () => {
            console.log('Express app running');
        });

    } catch (error) {
        console.log(error);
    }
};

starServer();