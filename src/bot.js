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

bot.start(start);
// bot.hears("Catalogs", catalogs);
// bot.action("categories", (ctx) => {
//   catalogs(ctx);
// });

// bot.hears("Contacts", contacts);

// bot.hears("Location", location);

// bot.on("callback_query", async (ctx, next) => {
//   if (!ctx.update.callback_query.data.startsWith("category_")) return next(ctx);
//   products(ctx);
// });

// bot.on("callback_query", product);

module.exports = bot;
