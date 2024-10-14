import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../../lib/data";

export default function Book() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href="/volumes" title="All Volumes">
        ← All Volumes
      </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image
        src={`/images/${volume.slug}.png`}
        width={140}
        height={230}
        alt="The Fellowship of the Ring"
      />
      <h2>All Volumes</h2>
      <ul>
        {volume.books.map((book) => (
          <li>
            <strong>{book.ordinal}</strong> {book.title}
          </li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers" title="The Two Towers">
        ← The Two Towers
      </Link>
    </>
  );
}
