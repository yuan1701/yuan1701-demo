const http = require('http');
const url = require('url')

const hostname = '127.0.0.1';
const port = 3000;

function start(route,handle){
    function onRequest(req, res){
        const pathname = url.parse(req.url).pathname;
        console.log(pathname)
        
        res.writeHeader(200, 'Content-Type', 'text/plain');//设置响应头
        res.end('Hello World\n');
    }
    http.createServer(onRequest).listen(port, hostname, () => { //专注于生产
        console.log(`Server running at http://${hostname}:${port}/`);
    });

}
exports.start=start;

// 把做产品的方法剥离出来，代码结果清晰，开发结构 
// const server = http.createServer((req, res) => {
//     const pathname = url.parse(req.url).pathname;
//     console.log(pathname)
    
//     res.writeHeader(200, 'Content-Type', 'text/plain');//设置响应头
//     res.end('Hello World\n');
// });
// server.listen(port, hostname, () => { //专注于生产
//     console.log(`Server running at http://${hostname}:${port}/`);
// }); 