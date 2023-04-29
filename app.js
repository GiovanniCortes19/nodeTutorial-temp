/* 
npm

Local dependency: use a downloaded dependency in current project
    - npm i <packageName>

Global dependency: use it in any project
     - npm install -g <packageName>
     - sudo install -g <packageName> (mac) 

package.json :
    manifest file - stores important info about project/package

 */

/*
Creating a package.json

    Manual approach:
        - create package.json in the root of the project
        - create each property inside an object in the file

    Automatic approach:
        run on the terminal
            - npm init  (step by step, pres enter to skip)
                or
            - npm init -y (everything default)
*/

// Using the downloaded dependency "lodash"
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('hello people');