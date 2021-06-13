import logger from '../../logger.js';
import fetch from 'node-fetch';

const bot = process.env.TG_BOT_ID;
const tgBotApiHost = 'https://api.telegram.org/bot' + bot;

class TelegramNotifier {

  constructor() {
    this.chat_id = {
      critical: -547011661,
    }
  }

  async sendMessage (chat_id, text) {
    const response = await fetch(tgBotApiHost + '/sendMessage', {
      method: 'post',
      body: JSON.stringify({
        chat_id,
        text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const answ = await response.json();
    await logger.debug('TelegramNotifier.sendMessage', '', {chat_id, text, answ});
  }
};

export default new TelegramNotifier();
