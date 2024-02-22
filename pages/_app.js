import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [blogposts, setBlogposts] = useState(data);
  // store the initial data in the state
  function toggleFavorites(id) {
    setBlogposts(
      blogposts.map((post) =>
        post.id == id ? { ...post, isFavorite: !post.isFavorite } : post
      )
    );
  }

  function addNewPost(post) {
    setBlogposts((prev) => [...prev, { ...post, id: nanoid() }]);
  }
  function deletePost(id) {
    console.log("deletePost id", id);
    // The filter method returns any id that does not match the current one and deletes it like this
    setBlogposts(blogposts.filter((post) => post.id !== id));
  }

  function editPost(post) {
    setBlogposts((prev) =>
      prev.map((x) => (x.id === post.id ? { ...x, ...post } : x))
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Component
          toggleFavorites={toggleFavorites}
          deletePost={deletePost}
          setBlogposts={setBlogposts}
          addNewPost={addNewPost}
          editPost={editPost}
          blogposts={blogposts}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
