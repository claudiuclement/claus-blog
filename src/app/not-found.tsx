import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>This page doesn&apos;t exist.</p>
      <p>
        <Link href="/">← Back to essays</Link>
      </p>
    </>
  );
}
