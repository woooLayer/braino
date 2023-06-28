import { OpenAI } from "../../../deps.ts";
import type { ChatCompletionOptions } from "../../../deps.ts";

export class ChatCompletion extends OpenAI {
  public options: ChatCompletionOptions;

  constructor(privateKey: string) {
    super(privateKey);
    this.options = {
      model: "",
      messages: [],
    };
  }

  public async create() {
    return await super.createChatCompletion(this.options);
  }

  public addUserMessage(content: string) {
    return this.options.messages.push({ role: "user", content: content });
  }

  public addSystemMessage(content: string) {
    return this.options.messages.push({ role: "system", content: content });
  }

  public addAssistantMessage(content: string) {
    return this.options.messages.push({ role: "assistant", content: content });
  }

  public clearMessage() {
    this.options.messages = [];
  }

  public setModel(model: string) {
    this.options.model = model;
  }
}
