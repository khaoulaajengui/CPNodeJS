const generator = require('generate-password');
const password=generator.generateMultiple(5,{
    length:10,
    uppercase:false
})

console.log(password);