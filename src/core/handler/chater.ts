import { Context } from "../../../deps.ts";

import { ChatCompletion } from "../../component/openai/chat.ts";

import { SendTypingActionLoopTask } from "./common.ts";

const defaultModel = "gpt-3.5-turbo";
const defaultPrivateKey = "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";

export const chater = (ctx: Context) => {
  const chat = new ChatCompletion(defaultPrivateKey);
  const setActionTask = new SendTypingActionLoopTask(ctx);

  if (ctx.message?.reply_to_message != undefined) {
    const replyContent = ctx.message.reply_to_message.text as string;
    if (ctx.message.reply_to_message.from?.id === ctx.me.id) {
      chat.addAssistantMessage(replyContent);
    } else {
      chat.addUserMessage(replyContent);
    }
  }

  chat.addUserMessage(ctx.message?.text as string);
  chat.setModel(defaultModel);
  chat.create()
    .then((c) => {
      const text = c.choices[0].message?.content as string;
      ctx.reply(text, { reply_to_message_id: ctx.message?.message_id });
    })
    .catch((e) => {
      const text = `Error: ${e.message}`;
      ctx.reply(text, { reply_to_message_id: ctx.message?.message_id });
    })
    .finally(() => {
      setActionTask.stop();
    });
};
