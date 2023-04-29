// CommonJS: every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// Access the names in moduleNames with: require()
const names = require('./4-moduleNames');

// Import sayHi function from moduleUtils
const sayHi = require('./5-moduleUtils')

// Importing data from alternative-flavor
const data = require('./6-alternative-flavor')
// console.log(data)

// When you Import a module, you are invoking any function inside of it
require('./7-mind-granade')

//  sayHi('Gio')
//  sayHi(names.john)
//  sayHi(names.peter)