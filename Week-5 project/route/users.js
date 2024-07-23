// import express from 'express';

// import { v4 as uuidv4 } from 'uuid';

// const router = express.Router();

// const users = [
//     {
//          firstName : "John",
//          lastName : "Doe",
//          age: 25
//     },
//      {
//         firstName : "Jane",
//         lastName: "Doe",
//         age: 24
//      }
// ]

// //all the routers start with / here 
// router.get('/', (req, res) => {
//     //console.log(users);
//     res.send(users);
// });



// router.post('/', (req, res) => {
//     //console.log('POST ROUTE REACHED');
    
//      const user = req.body;
//      users.push({ ... user, id: uuidv4() });
    

//     //  users.push({ ... user, id: uuidv4()});

//     // res.send('POST ROUTE REACHED');
//     res.send(`User with the username ${user.firstName} added to the databases`);
// });

// // /users/2 => req.params {id: 2}
// router.get('/:id', (req, res) => {
//    const { id } = req.params;

//    const foundUser = users.find((user) => user.id === id);
//     res.send(foundUser);
// });

// router.delete('/:id', (req,res) => {
//     const {id} = req.params;

//     //id to delete 123
//     //john 123
//     //jane 321
//     users = users.filter((user) => user.id != id);
//     res.send(`user with id ${id} will be delete from the database`)

// });

// //patch request is used to update the changes 
// router.patch('/:id', (req,res) => {
//     const { id } = req.params;
    
//     const {firstName, lastName, age} = req.body;

//     const user = users.find((user) => user.id === id);
//     if(firstName)
//     {
//         user.firstName = firstName;
//     }
//     if(lastName)
//         {
//             user.lastName = lastName;
//         }
//      if(age)
//          {
//                 user.age = age;
//         }
//     console.log(`user with the id ${id} has been updated`)
   

// })
// export default router;

//const express = require('express');
import express, { application } from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Schema and model
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  jobTitle: { type: String },
  gender: { type: String },
},
  {timestamps: true}
);



const User = mongoose.model('User', userSchema);

// POST route for creating a user
router.post('/', async (req, res) => {
  const { first_name, last_name, email, gender, job_title } = req.body;

  if (!first_name || !last_name || !email || !gender || !job_title) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  try {
    const result = await User.create({
      firstName: first_name,
      lastName: last_name,
      email: email,
      gender: gender,
      jobTitle: job_title
    });

    return res.status(201).json({ msg: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get('/', async (req, res) => {
    try {
      const allDbUsers = await User.find({});
      const html = `<ul> 
        ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join('')}
      </ul>`;
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  });

export default router;
