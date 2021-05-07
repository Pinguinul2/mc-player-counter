import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <ul>    
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src="/eternals.png" width="700" height="500" />
       </div>
      </>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        <Link href="/">
          <h1>PLAY.ETERNALS.RO</h1>
        </Link>
        </div>
        <Link href="/posts/test">
          <a>Test</a>
        </Link>
    </ul>
  )
}
    
export default Home
