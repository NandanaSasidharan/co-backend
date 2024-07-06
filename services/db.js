const mongoose = require('mongoose');

//connection string 
mongoose.connect('mongodb://localhost:27017/ContactApp')

//Create a model
const user = mongoose.model('user',{
    id:String,
    name:String,
    phone:String,
    email:String
    
})

module.exports={
   user
}