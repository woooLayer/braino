export interface User {
  id: string;
  name: string;
  openai: OpenAI;
}

export interface OpenAI {
  email: string;
  password: string;
  privateKey: string;
}
