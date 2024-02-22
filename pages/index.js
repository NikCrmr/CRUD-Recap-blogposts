import styled from "styled-components";
import Link from "next/link";
// name your list resource in the page props
// and map over it to render it
export default function IndexPage({ blogposts, toggleFavorites, deletePost }) {
  console.log("blogposts!", blogposts);
  function handleDeleteIndex(id) {
    const pureNumber = Number(id);
    console.log(pureNumber);

    // Check if the conversion was successful and the result is a finite number
    if (!isNaN(pureNumber) && isFinite(pureNumber)) {
      // Use the pureNumber in deletePost
      deletePost(pureNumber);
    } else {
      console.error(`Invalid 'id' value: ${id}`);
    }
  }
  return (
    <>
      <StyledH1>Frontend Recap</StyledH1>
      <StyledList>
        {blogposts.map(({ id, title, isFavorite }) => (
          <>
            <StyledListElement isFavorite={isFavorite} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </StyledListElement>
            <button onClick={() => toggleFavorites(id)}>
              {isFavorite ? "👍" : "👎"}
            </button>
            <Link href={`/posts/${id}/edit`}>
              <button>📝</button>
            </Link>
            <button onClick={() => handleDeleteIndex(id)}>𝐗</button>
          </>
        ))}
      </StyledList>
    </>
  );
}

/*
${(props) => (props.$show ? "blur(50px)" : "blur(0px)")};
*/
const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: sandybrown;
  padding: 2rem;
  border-radius: 15%;
  line-height: 4vh;
  & :hover {
    font-size: 150%;
    color: white;
  }
`;

const StyledH1 = styled.h1`
  position: relative;
  display: inline-block;
  color: transparent; /* Set the text color to transparent */
  background: linear-gradient(to right, pink, blue) no-repeat;
  //background-size: 100% 100%; /* Ensure full coverage of the text */
  -webkit-background-clip: text; /* Apply background-clip to the text content */
  background-clip: text;
`;

const StyledListElement = styled.li`
  color: ${(props) => (props.isFavorite ? "darkslategray" : "black")};
  background-color: ${(props) =>
    props.isFavorite ? "lightpink" : "sandybrown"};
`;
