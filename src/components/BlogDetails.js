import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const BlogDetails = () => {
    const{ id } = useParams();
    const {data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const handleDelete = (e) => {
    setIsDeleting(true);
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      }).then(() => {
        console.log("Blog deleted successfully!");
        setIsDeleting(false);
        navigate('/');
      });
    },500);
    }

    return (  
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div style={{color: 'red', fontWeight: 'bold'}}>{error}</div>}
            { blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Written By{blog.author}</p>
                <div>{ blog.body }</div>
                {!isDeleting && <button onClick={handleDelete}>Delete blog</button>}
                {isDeleting && <button disabled >Deleting ...</button>}
            </article>
            
            )}
        </div>
    );
}
 
export default BlogDetails;