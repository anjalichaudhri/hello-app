import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Home</title>
    </Head>
    <div className={styles.container}>
      link to the the 
      <br/>
      <Link legacyBehavior href="/posts/First"><a> <u>First post</u></a></Link>
      <br/>
      <Link legacyBehavior href="/contact-us/ContactUs"><a> <u>Contact Us</u></a></Link>
    </div>
    </>    
  )
}
