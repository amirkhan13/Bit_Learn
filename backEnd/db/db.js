
const mongoose = require('mongoose');


const db = async () =>{
    try {
        mongoose.set('strictQuery' , false);
        await mongoose.connect(process.env.MONGO_URL)
        
        console.log('db connected');
        
    } catch (error) {
        console.log('db connection error');
        
    }
}

const loginSchema  = new mongoose.Schema({
    
    email:{
        type : 'string',
        required : true,
      
    },
    password:{
        type: 'string',
        required: true,
    }

});
const collection = new mongoose.model("logins" , loginSchema);

module.exports ={db , collection };

