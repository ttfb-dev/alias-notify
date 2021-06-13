import express from "express";
import bodyParser from "body-parser";
import telegramNotifier from "./services/telegramNotifier/telegramNotifier.js";
import logger from "./logger.js";

const app = express();
const port = 80;
app.use(bodyParser.text());

app.post("/tg/critical", async (req, res) => {
  try {
    await telegramNotifier.sendMessage(telegramNotifier.chat_id.critical, req.body);
  } catch (e) {
    console.log(e.message);
    await logger.critical('telegramNotifier.sendMessage', e.message, {user: req.params.user, body: req.body})
  }
  res.status(200).send();
});

app.get("/", async (req, res) => {
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`running at 0.0.0.0:${port}`)
});
