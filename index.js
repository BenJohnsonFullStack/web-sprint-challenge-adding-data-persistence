// start your server here
const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.use("*", (req, res) => {
  res.json("Hello world");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
