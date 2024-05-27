const mongoose = require('mongoose')

const DB_URI = `mongodb://mongo:27017/task_node`

module.exports = () => {

    const connect = () => {

        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: false
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR !!',err);
                } else {
                    console.log('Conexion correcta!!')
                }
            }
        )

    }

    connect();

}