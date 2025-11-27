import { Link } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Control Hub',
  description: 'Hub for organizing your life',
  openGraph: {
    title: 'Control Hub',
    description: 'Hub for organizing your life: pets, plants, etc.',
    // images: [
    //   'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    // ]

  },
  robots: {
    index: false,
    follow: false
  }
}

export default function Home () {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li><Link href="/pets">Pets</Link></li>
        <li><Link href="/plants">Plants</Link></li>
      </ul>
    </main>
  );
}