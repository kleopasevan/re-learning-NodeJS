// Modules - Encapsulated Code (Only share minimum)
// in Common JS every file = module (default settngs)
const names = require('./4-trymodule')
const sayHi = require('./5-trymodule2')
const data = require('./6-alternative-module')
require('./7-module-mndgrenade')
//it will execute what's in the 7- file. (REQUIRE)
console.log(names)
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)