import Link from "next/link";
import { volumes, introduction } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`} title="">
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
