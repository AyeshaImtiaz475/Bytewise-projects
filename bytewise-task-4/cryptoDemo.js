import crypto from 'crypto';

//createhash()
// const hash = crypto.createHash('sha256');
// hash.update('password1234');
// console.log(hash.digest('hex'));

// crypto.randomBytes(16, (err, buf) => {
//  if(err) throw err;
//  console.log(buf.toString('hex'));
// });

//createCipheriv & createDecipherIv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv= crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf-8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);