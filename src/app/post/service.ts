import type { Post } from "app/post/interfaces";
import dbConnect from "../../utils/db-connect";

import Example from "./model";

export const createExample = async ({ title, description }: Post) => {
  await dbConnect();
  const data = await Example.create({ title, description });

  return data;
};

export const getPost = async () => {
  await dbConnect();
  const data = await Example.find({});

  return data;
};

export const findPostByTitle = async (title: string) => {
  await dbConnect();
  const data = await Example.find({ title: { $regex: title, $options: "i" } });

  return data;
};

export const deletePost = async (id: string) => {
  await dbConnect();
  await Example.findByIdAndDelete(id);
};

export const findPostDetailById = async (id: string) => {
  await dbConnect();
  const data = await Example.findOne({ _id: id });

  return data;
};
