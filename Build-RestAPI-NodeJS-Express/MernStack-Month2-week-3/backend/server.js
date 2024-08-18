import express from "express";
const app = express();
//app.use(express.static('dist'))
// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

//get a list of 5 jokes
//routes
app.get('/api/jokes', (req,res) => {

    const jokes= [
        {
            id:1,
            title: 'A  joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Another  joke',
            content: 'This is a another joke'
        },
        {
            id:3,
            title: 'Another third joke',
            content: 'This is a another third joke'
        },
        {
            id:4,
            title: 'A  fourth joke',
            content: 'This is a  fourthjoke'
        },
        {
            id:5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes);
}
);

const port = process.env.PORT || 3000;
//process.env sa port mila ga 

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
}
);