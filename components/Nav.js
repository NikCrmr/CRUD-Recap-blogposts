import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/fav/">Favorites</Link>
      <Link href="/posts/new">＋</Link>

      <Link href="/slider/">Slider</Link>
    </nav>
  );
}
