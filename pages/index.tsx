import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getAllFilesMetaData } from '../lib/mdx';
import { PostMetaData } from '../models/post';
import Link from 'next/link';


const Home: NextPage<{ posts: [] }> = ({ posts }) => {
  return (
    <div >
      <Head>
        <title>Blog Next</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main >
        <h1 >
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <div >
          {posts.map((post: PostMetaData) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} >
              <a href='' >
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer >
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span >
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllFilesMetaData();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
