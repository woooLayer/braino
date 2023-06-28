// run the bot locally

import { braino } from "./bot.ts";

await braino.api.deleteWebhook();

braino.start();
