import Head from 'next/head';
import Navbar from '../comps/navbar';
import Searchbar from '../comps/searchbar';

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
