import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewPost({ addNewPost }) {
  const router = useRouter();

  async function onSubmit(data) {
    addNewPost(data);
    router.push("/");
  }
  return (
    <>
      <h1>Add an New Post</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
}

/*
import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewPage({ addAlbum }) {
  const router = useRouter();

  async function onSubmit(data) {
    addAlbum(data);
    router.push("/");
  }

  return (
    <>
      <h1>New Album</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
}
*/
