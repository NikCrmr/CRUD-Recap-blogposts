import Link from "next/link";

export default function FavoritePage({ blogposts }) {
  const favs = blogposts.filter((x) => x.isFavorite);
  console.log("favs", favs);
  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favs.map(({ id, title }) => (
          <Link href={`../posts/${id}`}>
            <li key={id}>{title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
