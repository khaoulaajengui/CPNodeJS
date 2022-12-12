const http=require('http');

const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        res.write(' <h1>Hello Node!!!!</h1> ')
        res.end
    }
   
    })
    const PORT=3000

    server.listen(3000,err=>err? console.log(err) : console.log(`server is running on ${PORT}`))