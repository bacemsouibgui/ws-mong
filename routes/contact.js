// importation express
const express= require("express");
//Router
const router= express.Router();
// importation contact
const Contact= require("../models/Contacts")

// test route
/*router.get('/', (req,res)=> {
    res.send('test')
})*/
//first route post
//post
router.post("/add",async(req, res)=>{
    const {name, email, phone}= req.body
    try{
        const newContact= new Contact({name, email, phone})
        const contact= await newContact.save()
        res.send({msg:"contact added", contact})

    }
    catch(error){
        console.log(error)

    }
} )

// get all contacts
router.get('/', async(req,res)=> {
    try{
       const contacts=await Contact.find();
       res.send({msg: 'data fetched', contacts})
    }
    catch(error) {
      console.log(error)
    }
})

// DELETE
router.delete('/delete/:id', async(req,res)=>{
    const {id}= req.params
    try {
      
        const contact= await Contact.findOneAndDelete({_id: id})
        res.send({msg: 'contact deleted', contact})
    }
    catch(error) {
         
        console.log(error)
    }
})

// UPDATE
router.put('/edit/:id', async (req,res)=> {
    const {id}= req.params

    try {
        const contact= await Contact.findByIdAndUpdate({_id:id}, {$set: req.body})
        res.send({msg: "contact edited", contact})
    }

    catch(error) {
        console.log(error)
    }
  
} )

module.exports= router