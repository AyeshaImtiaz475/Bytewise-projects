import { v4 as uuidv4 } from 'uuid';

export const getUsers = (req,res) => {
    //console.log(users);
    res.send("Hello");
}
let users =  [];

export const createUser = (req,res) => {

  
    const user = req.body;
   
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUser = (req,res) => {
    //console.log(req.params);
    const { id } = req.params;
    const founderUser = users.find((user) => user.id === id);
    //res.send('THE GET ID ROUTE');
    //res.send(req.params);
    res.send(founderUser);
};

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the databases`);
};

export const UpdateUser = (req,res) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName)
    {
        user.lastName = lastName;
    }
    if(age)
    {
        user.age = age;
    }
    res.send (`User with the ${id} had been updated`);
};
