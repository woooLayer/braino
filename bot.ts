import { Bot } from "./deps.ts";

import { chater } from "./src/core/handler/chater.ts";
import { userInfo } from "./src/core/handler/user.ts";

export const braino = new Bot(Deno.env.get("BOT_TOKEN") || "");

braino.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

braino.command("userinfo", (ctx) => userInfo(ctx));

braino.on("message:text", (ctx) => chater(ctx));
