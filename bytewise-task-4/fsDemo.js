//import fs from 'fs';
//import { read, write, writeFile } from 'fs';
import fs from 'fs/promises';

// //read file() -callback
// fs.readFile('./test.txt', 'utf-8', (err,data) => {
//   if(err) throw err;
//   console.log(data);
// });

// //readfilesync() ---synchronous version

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//readfile() -promise .then()

// fs.readFile('./test.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

//readfile() ----async/await

const readFile = async() => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  }
  catch(error)
  {
    console.log(error);
  }
};


//writefile()

const writeFile = async() => {
    try{
        await fs.writeFile('./test.txt', 'hello, i am writing to this file');
        console.log('File written to...');
    }
    catch(error)
    {
        console.log(error);
    }
};

//appendfile();

const appendfile = async() => {
    try{
        await fs.appendFile('./test/txt', '/n this is appended text');
       console.log('File appended to ...');
    }
    catch(error)
    {
        console.log(error);
    }

}

writeFile();
readFile();
