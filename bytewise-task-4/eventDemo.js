import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler()
{
    console.log('hello world');
}

function goodbyeHandler()
{
    console.log('Goodbye world');
}

//register event listerners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye');

//error handling
myEmitter.on('error', (err) => {
    console.log('an errir occurred:' ,err);
});
//simulate error
myEmitter.emit('error', new Error('Something went wrong'));
