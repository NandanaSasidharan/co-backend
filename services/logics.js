const db = require('../services/db')

//logic for get all employees from the database
const getAllContacts=()=>{
    return db.user.find().then(
        (result)=>{//result-> all employees details
            if(result){
                  return{
                    statusCode:200,
                    users:result
                  }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contacts not found'
                }
            }
        }
    )
}

const addContact=(id,name,phone,email)=>{
    return db.user.findOne({id}).then((result)=>{
//if id is present in the db
if(result){
    return{
        statusCode:404,
        message:"Contact already exist"
    }
}
else{
    //if id is not present in the db, to save all the data in db
    const newContact=new db.user({id,name,phone,email})
    newContact.save()
    return{
        statusCode:200,
        message:"Contact added successfully..."
    }
}
    })
}
const deleteContact=(id)=>{
    return db.user.deleteOne({id}).then((result)=>{
        
            return{
            statusCode:200,
            message:"Contact details delete successfully"
        }
    
    })
    .catch((error)=>{
        return{
            statusCode:404,
            message:"can't delete an contact from the database"
        }
    })
       
    }
  
const getAnContact=(id)=>{
    return db.user.findOne({id}).then(
        (result)=>{//result-> all employees details
            if(result){
                  return{
                    statusCode:200,
                    users:result
                  }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contacts not found'
                }
            }
        }
    )
}
const updateContact=(id,name,phone,email)=>{
    return db.user.findOne({id}).then(
        (result)=>{
            if(result){

                //updated contact details to the mongoDB
                result.id=id;
                result.name=name;
                result.phone=phone;
                result.email=email;
              

                // to save the contact details to the mongoDB
                result.save();

                return{
                    statusCode:200,
                    message:"Contact details updated successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contact not found'
                }
            }
        }
    )
  }
  


module.exports={
    getAllContacts,
    addContact,
    deleteContact,
    getAnContact,
    updateContact
}


   
