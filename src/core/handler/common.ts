import type { Context } from "grammy";

import { LoopTask } from "@utils/loop.ts";

export class SendTypingActionLoopTask extends LoopTask {
  constructor(ctx: Context) {
    ctx.replyWithChatAction("typing");
    super(5000, () => {
      ctx.replyWithChatAction("typing");
    });
    super.start();
  }
}
