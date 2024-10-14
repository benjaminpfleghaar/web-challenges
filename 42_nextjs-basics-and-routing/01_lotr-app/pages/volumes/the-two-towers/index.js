import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../../lib/data";

export default function Book() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
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
      <Link
        href="/volumes/the-fellowship-of-the-ring"
        title="the-fellowship-of-the-ring"
      >
        ← The Fellowship of the Ring
      </Link>{" "}
      /{" "}
      <Link
        href="/volumes/the-return-of-the-king"
        title="the-return-of-the-king"
      >
        The Return of the King →
      </Link>
    </>
  );
}
