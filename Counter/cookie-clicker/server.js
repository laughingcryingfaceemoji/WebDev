const http = require("http")

const server = http.createServer((req, res) =>{

    res.end("This message is brought to you buy backend.)")
})

server.listen(3000, () =>{

    console.log("Server is running on port 3000")
})