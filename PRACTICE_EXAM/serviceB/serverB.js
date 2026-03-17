const http = require("http");
const PORT = 4000;

const server = http.createServer((req, res) => {
    if (req.url === "/process") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const data = {
            service: "Server B",
            message: "Processing successful"
        };
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log("Server B running on port " + PORT);
});