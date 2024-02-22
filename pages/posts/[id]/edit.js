import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function EditView({ blogposts }) {
  const router = useRouter();
  const { id } = router.query;
  const currentPost = blogposts.find((post) => post.id == id);

  if (!currentPost) {
    return <p>Post not found</p>;
  }
  async function onSubmit(data) {
    editPost({ ...data, id: currentPost.id });
    router.push(`/posts/${currentPost.id}`);
  }

  return (
    <>
      <h1>Edit Post</h1>
      <Form currentPost={currentPost} onSubmit={onSubmit} />
    </>
  );
}
