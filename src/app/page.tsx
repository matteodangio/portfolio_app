 import Image from "next/image";
import Link from "next/link";
 /* Regola App Router: in ogni cartella sotto app/, un page.tsx diventa una route pubblica.*/
export default function Home() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>  
    </div>
  );
}
