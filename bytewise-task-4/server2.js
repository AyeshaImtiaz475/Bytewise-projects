import { REFUSED } from 'dns';
import{createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id:1, name: 'Ayesha Imtiaz'},
    {id:2, name: 'Ayesha Imtiaz'},
    {id:3, name: 'Ayesha Imtiaz'},
];

//logger middleware 
const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

//JSON middleware
const jsonMiddleware = (req,res,next) => {
    res.setHeader('content-Type', 'application/json');
    next();
}

//route handler for GET /api/users
const getUsersHandler = (req,res) => {
    res.write(JSON.stringify(users));
    res.end();
};

//route hanlder for GET /api/users/_id
const getUsersByIdHandler= (req,res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    
    if(user)
        {   
            res.write(JSON.stringify(user));
        }
        else{
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User not found'}));
        }
        res.end();
};

//route handler  for POST /api/users
const createUserHandler = (req,res) => {
            let body = '';
            //listen for data 
            req.on('data',(chunk) => {
                body += chunk.toString();
            });
            req.on('end',() => {
                const newUser = JSON.parse(body);
                users.push(newUser);
                res.statusCode=201;
                res.write(JSON.stringify(newUser));
                res.end();
            })

}


//Not found handler 
const notFoundHandler = (req,res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Router not found'}));
    res.end();
}


const server = createServer ((req, res)=> {
    logger(req,res,() => {
        jsonMiddleware(req,res,() => {
            if(req.url === '/api/users' && req.method === 'GET')
                { 
                    getUsersHandler(req,res);
                }
                else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')
                    {
                        getUsersByIdHandler(req,res);  
                    }
                    else if(req.url === '/api/users' && req.method === 'POST')
                        {
                      createUserHandler(req,res);
                        }
                    else{
                        notFoundHandler(req,res);
                    }

        });



        // if(req.url === '/api/users' && req.method === 'GET')
        //     {
        //        res.setHeader('content-Type', 'application/json');
        //        //res.statusCode = 404;
        //        res.write(JSON.stringify(users));
        //        res.end();
        //     }
        //     else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')
        //         {
        //             const id = req.url.split('/')[3];
        //             const user = users.find((user) => user.id === parseInt(id));
        //             res.setHeader('content-Type', 'application/json');
        //             if(user)
        //                 {
                            
        //                     res.write(JSON.stringify(user));
        //                 }
        //                 else{
        //                     res.statusCode = 404;
        //                     res.write(JSON.stringify({message: 'User not found'}));
        //                     res.end();
        //                 }
        //                 res.end();
        //         }
        //     else{
        //         res.setHeader('content-Type', 'application/json');
        //         res.statusCode = 404;
        //         res.write(JSON.stringify({message: 'Router not found'}));
        //         res.end();
        //     }
    });
      
});

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});