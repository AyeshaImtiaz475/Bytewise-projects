import express from "express";
import { createUser, getUsers, getUser , deleteUser, UpdateUser} from "../controllers/users.js";


const router = express.Router();

// let users =  [
//     // {
//     //     firstName: "John",
//     //     lastName: "Doe",
//     //     age: 25
//     // },
//     // {
//     //     firstName: "John",
//     //     lastName: "Doe",
//     //     age: 24
//     // }

// ]

router.get('/', getUsers);


 router.post('/', createUser);
// (req,res) => {
//     console.log('POST ROUTE REACHED');

//     //console.log(req.body);
//     const user = req.body;
//     //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
//     //const userWithId = { ...user, id: uuidv4() }

//     users.push({ ...user, id: uuidv4() });
//     //res.send('POST ROUTE REACHED');

//     res.send(`User with the name ${user.firstName} added to the database!`);
// });





// /users/id -> we can access the users from any id 
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch(`/:id`, UpdateUser);

export default router;