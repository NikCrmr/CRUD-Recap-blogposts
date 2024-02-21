import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";

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
  return (
    <>
      <Nav />
      <main>
        <Component
          toggleFavorites={toggleFavorites}
          setBlogposts={setBlogposts}
          blogposts={blogposts}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
