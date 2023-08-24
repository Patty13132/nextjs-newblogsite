import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi my name is Gihann Patrix B Manalang a 3rd year Computer Engineering Students.
           My hobbies are playing Online Games. My favorite genre of music is OPM and I love Adobo.
           I also like watching Netflix during my free time.</p>
           <p>
            I took up Computer Engineering because I love Computers!
           </p>
           <p>
            I see myself exploring Web Development after my graduation.
           </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}