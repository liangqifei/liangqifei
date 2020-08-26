var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type" : "text/plain;charset=utf-8" // 输出类型
    });
    response.write("你好");// 页面输出
    response.end();
}).listen(3000); // 监听端口号
console.log("服务器启动!");
