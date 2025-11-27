const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <h1 style = "font-family: Arial;"> Abeles, Liera V.</h1>
    <h2>NT-4101</h2>
    <p><i>"Just Give Up!</i><p>
    `);
    res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});