import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h3>Jihun Gwak</h3>
      <Link
        href="https://github.com/jihun-gwak/cprg306-assignments.git"
        className="text-cyan-300 hover:text-cyan-500"
      >
        Github repository
      </Link>
    </main>
  );
}
