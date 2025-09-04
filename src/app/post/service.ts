import type { Post } from "app/post/interfaces";
import { ObjectId } from "mongodb";
import client from "../../libs/client";

const db = client.db(); // 데이터베이스 이름을 .env 파일의 MONGODB_URI 에서 가져옵니다.
const collection = db.collection<Post>("posts");

export const createPost = async ({ title, description }: Post) => {
  const data = await collection.insertOne({ title, description });

  return data;
};

export const getPost = async () => {
  // only one post
  const data = await collection.find({}).toArray();

  return data;
};

export const findPostByTitle = async (title: string) => {
  const data = await collection.find({ title: { $regex: title, $options: "i" } }).toArray();

  return data;
};

export const deletePost = async (id: string) => {
  await collection.deleteOne({ _id: new ObjectId(id) });
};

export const findPostDetailById = async (id: string) => {
  const data = await collection.findOne({ _id: new ObjectId(id) });

  return data;
};
