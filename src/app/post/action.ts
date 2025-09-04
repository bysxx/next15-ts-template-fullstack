"use server";

import type { Post } from "app/post/interfaces";
import * as service from "./service";

export async function getPost() {
  const data = await service.getPost();

  return data;
}

export async function createPost({ title, description }: Post) {
  const data = await service.createPost({ title, description });

  return data;
}
