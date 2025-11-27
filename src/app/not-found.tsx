import Link from "next/link";

export default function NotFound() {
   return (
      <main>
         <h1>Not Found</h1>
         <Link href="/">Voltar para a home</Link>
      </main>
   );
}