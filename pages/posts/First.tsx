import Head from "next/head";
import Link from "next/link";
/**
 * 
 */
const First = (props: any) => {
    return(
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <div>
            <h1>here is the first post</h1>
            <div>stars: {props.stars}</div>
            <Link legacyBehavior href="/">
                <a><u>Home</u></a>
            </Link>
        </div>
        </>        
    ) 
    
}

export async function getServerSideProps(context: any) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
       props: { stars: json.stargazers_count }
    }
 }
 
export default First;