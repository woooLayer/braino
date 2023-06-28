import { Bot } from "grammy";

import { chater } from "@handler/chater.ts";
import { userInfo } from "@handler/user.ts";

export const braino = new Bot(Deno.env.get("BOT_TOKEN") as string);

braino.command("start", (ctx) => ctx.reply("Hello!"));

braino.command("userinfo", (ctx) => userInfo(ctx));

braino.on("message:text", (ctx) => chater(ctx));
