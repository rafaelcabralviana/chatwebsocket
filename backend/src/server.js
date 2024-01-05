
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + './js/script.js', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(8000);




const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer ({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) =>{

    ws.on("error", console.error)


    ws.on("message", (data) => {    
        wss.clients.forEach((client) => client.send(data.toString()))

    })
    console.log("client connected")
})