import type { User } from "./types.ts";

const kv = await Deno.openKv();

export async function setUser(user: User) {
  const key = ["users", user.id];
  const res = await kv
    .atomic()
    .set(key, user)
    .commit();
}

export async function getUserById(id: string) {
  const res = await kv.get<User>(["users", id]);
  return res.value;
}

export async function listUser() {
  for await (const entry of kv.list({ prefix: ["users"] })) {
    console.log(entry.key);
    console.log(entry.value);
  }
}
