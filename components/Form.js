import styles from "./Form.module.css";
import { useState } from "react";

export default function Form({ currentPost, onSubmit }) {
  const [isChecked, setChecked] = useState(currentPost?.isFavorite);
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
    console.log("newData", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Title
          <input
            name="title"
            required
            placeholder="Enter the post title"
            defaultValue={currentPost?.title}
          ></input>
        </label>
        <label>
          Subtitle
          <input
            name="subtitle"
            placeholder="Enter the post subtitle"
            defaultValue={currentPost?.subtitle}
          ></input>
        </label>
        <label>
          Description
          <input
            name="description"
            placeholder="Enter the post description"
            defaultValue={currentPost?.description}
          ></input>
        </label>
        <label>
          Category
          <input
            name="description"
            placeholder="Enter the post category"
            defaultValue={currentPost?.category}
          ></input>
        </label>
        <label>
          Image-URL
          <input
            name="image"
            placeholder="Enter the image url"
            defaultValue={currentPost?.image}
          ></input>
        </label>
        <label>
          👍
          <input
            name="Favorite"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setChecked(!isChecked);
            }}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
