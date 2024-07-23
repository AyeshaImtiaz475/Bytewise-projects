import express from 'express';
//Package.json > add> type: modules > to add the latest values

import userRoutes from './routes/users.js';

import bodyParser from 'body-parser';
//whole application relies on the variable app
const app = express();
const PORT = 5000;


//this show we are using the json version in our application
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req,res) =>{
    console.log('[TEST]!');

    res.send('Hello from Homepage.');
});

//listen incoming request
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

//inorder to make sure the server upadte after every chnges we had 
//we had to isntall nodemon and see that in the dependencies of our package.json
//add the tyescript of our own like "start": "nodemon index.js"

//DONE WITH SETTINGUP Express