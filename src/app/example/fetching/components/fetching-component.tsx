import { getPost } from "app/post/action";

export default async function FetchingComponent() {
  const data = await getPost();

  return (
    <div className="">
      <h1>{data.title}</h1>
      <span>{data.description}</span>
    </div>
  );
}
