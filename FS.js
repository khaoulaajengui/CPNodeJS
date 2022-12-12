const fs=require('fs')

fs.writeFile('./welcome.txt','Hello Node',()=>{
    console.log('created succesfully')
})

fs.readFile('./welcome.txt','utf-8',(err,data)=>{
    console.log(data)
})