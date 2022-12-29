import Link from "next/link";
import Image from 'next/image'
import Head from "next/head";
/**
 * returning contact details.
 */
const ContactUs = () => {
    return (
    <>
    <Head>
        <title>Contact Us.</title>
    </Head>
    <div>
        {/* <img src="/Canon_40D.jpg" alt="image"/> */}
        <Image src="/Canon_40D.jpg" alt="image" width="100" height="100"/>
        <br/>
        Contact us: xyz
        <br/>
        <Link legacyBehavior href = "/">
            <a>Home</a>
        </Link>
    </div>
    </>
    )
}


export default ContactUs;