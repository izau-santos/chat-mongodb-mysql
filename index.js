const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
/*--------------------------------------------*/
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
/*--------------------------------------------*/
app.use(express.static(path.join(__dirname, 'public')));
/*--------------------------------------------*/
app.set('views', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile);
/*--------------------------------------------*/
app.use('/', (req, res)=>{
    res.render('index.html')
});
/*------------------inicio do codigo-------------------------*/
let messages = [];

/* CRIA A CONEXÃO COM SOCKET.IO */
io.on('connection', socket=>{
    console.log('novo usuarioconectado! ID: ' + socket.id)
});
/*------------------fim do codigo--------------------------*/
server.listen(3000, ()=>{
    console.log("Rodando servidor web em http://localhost:3000")
});