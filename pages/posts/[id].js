import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
export default function SingleBlogpost({
  blogposts,
  toggleFavorites,
  deletePost,
}) {
  const router = useRouter();
  const { id } = router.query;
  const currentPost = blogposts.find((post) => post.id == id);

  if (!currentPost) {
    return <p>Post not found</p>;
  }

  function handleDelete() {
    console.log("id.js handleDelete router.query.id", router.query.id);
    deletePost(router.query.id);
    router.push("/");
  }
  return (
    <div>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.subtitle}</p>
      <p>{currentPost.description}</p>
      <StyledDiv>
        <Image
          alt={currentPost.subtitle}
          src={currentPost.image}
          layout="fill"
          objectFit="cover"
        ></Image>
      </StyledDiv>
      <StyledLink href={"../"}>🔙Back</StyledLink>
      <p>
        categrories: <Link href="/">#{currentPost.category}</Link>
      </p>
      <StyledSpan>{currentPost.isFavorite ? "👍" : "👎"}</StyledSpan>

      <StyledButton onClick={() => toggleFavorites(router.query.id)}>
        {currentPost.isFavorite == false ? "Like it😀" : "Unlike👎"}
      </StyledButton>
      <Link href={`/posts/${id}/edit`}>
        <StyledButton>📝</StyledButton>
      </Link>
      <StyledButton onClick={handleDelete}>𝐗</StyledButton>
      <br />
    </div>
  );
}

const StyledLink = styled(Link)`
  font-size: 120%;
  &:active {
    background-color: yellow;
    transition: background-color 1sec;
  }
`;

const StyledSpan = styled.span`
  border-radius: 50%;
  background-color: #cc8ea0;
  position: absolute;
  bottom: 12%;
  right: 45%;
  font-size: 4rem;
  padding: 1rem;
  width: 5rem;
  height: 5rem;
`;

const StyledDiv = styled.div`
  position: relative;
  width: auto;
  height: 300px;
`;

const StyledButton = styled.button`
  border: 1;
  border-radius: 15px;
  background-color: white;
  margin: 2rem;
  padding: 1rem;
  &:active {
    background-color: yellow;
    transition: background-color 1s;
  }
`;
