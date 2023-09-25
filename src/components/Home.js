import BlogList from "./BlogList"
import useFetch from "../hooks/useFetch"

export default function Home() {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return (
    <div className="home">
        { error && <div style={{color: 'red', fontWeight: 'bold'}}>{error}</div>}
        { isLoading && <div> Loading... </div>}
        { blogs && <BlogList blogs={blogs} title = "All blogs!" />}
    </div>
  )
}
