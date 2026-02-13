const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));
app.use(express.json());

let questions = [];

app.post("/question", (req, res) => {
  const question = {
    id: Date.now(),
    name: req.body.name || "Anonyme",
    text: req.body.text,
    answered: false
  };

  questions.push(question);
  io.emit("new-question", question);
  res.sendStatus(200);
});

app.get("/questions", (req, res) => {
  res.json(questions);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});

