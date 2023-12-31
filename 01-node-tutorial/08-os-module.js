const os = require('os')

//Info about current user
const user = os.userInfo()
console.log(user)

//this method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds...`)

const currentOs = {
    name: os.type(),
    released: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOs)