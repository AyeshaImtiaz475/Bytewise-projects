console.log(process.argv);
console.log(process.argv[3]);

//process..env 
console.log(process.env.LOGNAME);

//pid 
console.log(process.id);

//cwd
console.log(process.cwd());

//title
console.log(process.title);

//memoryusage();
console.log(process.memoryUsage());

//update()
console.log(process.uptime());

//exit()
process.exit(0);
console.log('hello from after exit');