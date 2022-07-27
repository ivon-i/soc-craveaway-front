import Head from 'next/head';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Craveaway</title>
      </Head>

      <main>
        <Navbar></Navbar>
        <Searchbar />
      </main>
    </div>
  );
}
