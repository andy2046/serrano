# serrano
serialize error into POJO when you need to `JSON.stringify()` error

## Examples
```js
const serrano = require('serrano')

const error = new Error('error msg')

console.log(error)
//=> Error: error msg

console.log(JSON.stringify(error))
//=> {}

console.log(serrano(error))
//=> { message: 'error msg', stack: 'at Object.<anonymous> ...' }

error.err = error

try {
  console.log(JSON.stringify(error))
} catch (e) {
  console.error(e) // TypeError: Converting circular structure to JSON
}

console.log(serrano(error))
//=> { err: '[Circular]', message: 'error msg', stack: 'at Object.<anonymous> ...' }

error.child = new Error('child error msg')

console.log(serrano(error))
//=> { err: '[Circular]', message: 'error msg', stack: 'at Object.<anonymous> ...',
//=> child: { message: 'child error msg', stack: 'at Object.<anonymous> ...' } }

console.log(serrano(function test(x) {
  console.log('test', x)
}))
/*
function test(x) {
  console.log('test', x)
}
*/
```

## Installation

```
npm install --save serrano
```

## Usage
You can import from `serrano`:

```js
const serrano = require('serrano');
// or
import serrano from 'serrano';
```
