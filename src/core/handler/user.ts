import { Context } from "grammy";

import { getUserById, listUser, setUser } from "@core/db/db.ts";
import type { User } from "@core/db/types.ts";

const getUser = (ctx: Context) => {
  return ctx.message?.from;
};

export const userInfo = (ctx: Context) => {
  const from = getUser(ctx);
  ctx.reply(
    `Name: ${from.username}\nLanguage: ${from.language_code}\nID: ${from.id}`,
  );
};
