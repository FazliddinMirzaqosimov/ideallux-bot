const { Telegraf } = require("telegraf");
const axios = require("axios");
const {
  start,
  catalogs,
  contacts,
  location,
  products,
  product,
} = require("./controllers");
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use((ctx, next) => {
  bot.telegram.sendMessage(
    5520661044,
    `<a href="https://t.me/${
      ctx.update.message?.from?.username ||
      ctx.update.callback_query?.from?.username
    }">${
      ctx.message?.from.first_name || ctx.update.callback_query?.from?.username
    }</a> used bot`,
    {
      parse_mode: "HTML",
    }
  );

  next(ctx);
});
bot.start(start);
bot.hears("Catalogs", catalogs);
bot.action("categories", (ctx) => {
  catalogs(ctx);
});

bot.hears("Contacts", contacts);

bot.hears("Location", location);

bot.on("callback_query", async (ctx, next) => {
  if (!ctx.update.callback_query.data.startsWith("category_")) return next(ctx);
  products(ctx);
});

bot.on("callback_query", product);

module.exports = bot;
