const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;

const dbConnection = async () => {

    try {
        await mongoose.connect(URI, {

            useNewUrlParser: true,
    
            useUnifiedTopology: true
    
        },
        console.log('Conectado a la base de datos!!')
        
    )} catch (error) {
        console.log(error);
        if (error) throw new Error('Error al conectar la base de datos!!');
        
    
    }


        

   
};

module.exports = {
    dbConnection
};