import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../../lib/data";
import { generateLinks } from "../../../lib/utils";

export default function Book() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const index = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  const links = generateLinks(index, volumes);

  return (
    <>
      <Link href="/volumes" title="All Volumes">
        ← All Volumes
      </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image src={volume.cover} width={140} height={230} alt={volume.title} />
      <h2>All Volumes</h2>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            <strong>{book.ordinal}</strong> {book.title}
          </li>
        ))}
      </ul>
      {links.map((link) => (
        <Link key={link.title} href={link.href} title={link.title}>
          {link.title}
        </Link>
      ))}
    </>
  );
}
