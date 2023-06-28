import { serve } from "server";
import { webhookCallback } from "grammy";

import { braino } from "./bot.ts";

const handleUpdate = webhookCallback(braino, "std/http");

serve(async (req) => {
  if (req.method === "POST") {
    const url = new URL(req.url);
    if (url.pathname.slice(1) === braino.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();
});
