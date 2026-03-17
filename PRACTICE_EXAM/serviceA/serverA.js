const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/gateway") {
        // Ang Gateway motawag sa Processor sa port 4000
        http.get("http://localhost:4000/processing", (response) => {
            let data = "";
            response.on("data", (chunk) => { data += chunk; });
            response.on("end", () => {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(data); 
            });
        }).on("error", (err) => {
            res.writeHead(500);
            res.end("Error: " + err.message);
        });
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log("Server A (Gateway) running on port " + PORT);
});