import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2" className="text-cyan-300 hover:text-cyan-500">
        week-2 page
      </Link>
      <Link href="./week-3" className="text-cyan-300 hover:text-cyan-500 m-4">
        week-3 page
      </Link>
    </main>
  );
}
