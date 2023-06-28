// run the bot locally

import { braino } from "./bot.js";

await braino.api.deleteWebhook();

braino.start();
