import { getPostData, getAllIds } from "../../lib/post";
/**
 * dynamic routes
 */
const Dynamic = ({data}: any) => {
    return (
        <div>
            <h2> id: {data.id}</h2>
            <h2> title: {data.title}</h2>
        </div>
    )
}

// to get ids
export async function getStaticPaths(){
    const paths = getAllIds()
    return {
        paths,
        fallback: true
    }
}

// to get contents
export async function getStaticProps({params}: any){
    console.log(params);
    const data = getPostData(params.id)
    return {
        props: {
            data
        }
    }
}

export default Dynamic;