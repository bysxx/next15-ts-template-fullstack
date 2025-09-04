"use server";

import type { Post } from "app/(client)/post/interfaces";

export async function getPost() {
  // const data = await getPost() <- this is where you would call your service
  const data: Post = {
    title: "hello world!",
    description: "This is an blog post route.",
  };

  return data;
}
