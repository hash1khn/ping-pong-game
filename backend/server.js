const express=require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server}=require('socket.io')
const io=new Server(server)
const cors=require('cors')
const path = require('path');

app.use(cors({
    origin: '*'
}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend','index.html'));
});
io.on('connection',(socket)=>{
    console.log("user connected");

    socket.on('disconnect',()=>{
        console.log("user disconnected");
    });
})
server.listen(3000,()=>{
    console.log("listening on port 3000");

});