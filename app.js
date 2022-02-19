const TelegramBot = require('node-telegram-bot-api');
const token = '5249845334:AAFGGDnG5PB4YxBzD7CUieLyRDf8Y8vfGlc';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});