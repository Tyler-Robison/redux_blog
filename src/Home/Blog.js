import React from "react";
// import PostContext from "../Context/PostContext";
import { useNavigate } from 'react-router-dom';
import './Blog.css'
import { useSelector } from "react-redux";

// make blog title component?
const Blog = () => {
    // const { posts } = useContext(PostContext);
    const navigate = useNavigate();
    const posts = useSelector(state => state.posts)

    const getDetail = (id) => {
        navigate(`/posts/${id}`)
    }

    // return (
    //     <div>
    //         <h1>Blog</h1>
    //         <div className="post-container">
    //             {posts.map(post => {
    //                 return <div className="post" onClick={() => getDetail(post.id)} key={post.id}>
    //                     <p>{post.title}</p>
    //                     <p>{post.description}</p>
    //                 </div>
    //             })}
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <h1>Blog</h1>
            <div className="post-container">
                {Object.entries(posts).map(obj => {
                    const id = obj[0]
                    const post = obj[1]

                    return <div key={id} className="post" onClick={() => getDetail(id)}>
                        <p> {post.title}</p>
                        <p> {post.description}</p>
                    </div>
                }
                )}
            </div>
        </div>
    )
}

export default Blog