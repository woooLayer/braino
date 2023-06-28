import { Context } from "../../../deps.ts";

import { LoopTask } from "../../component/utils/loop.ts";

export class SendTypingActionLoopTask extends LoopTask {
  constructor(ctx: Context) {
    ctx.replyWithChatAction("typing");
    super(5000, () => {
      ctx.replyWithChatAction("typing");
    });
    super.start();
  }
}
