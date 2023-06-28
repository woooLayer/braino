import { Context } from "../../../deps.ts";

const getUser = (ctx: Context) => {
  return ctx.message?.from;
};

export const userInfo = (ctx: Context) => {
  const from = getUser(ctx);
  ctx.reply(
    `Name: ${from.username}\nLanguage: ${from.language_code}\nID: ${from.id}`,
  );
};
