import React, { useContext } from "react";
import PostContext from "../Context/PostContext";
import { useNavigate } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const { posts } = useContext(PostContext);
    const navigate = useNavigate();

    const getDetail = (id) => {
        navigate(`/posts/${id}`)
    }

    return (
        <div>
            <h1>Blog</h1>
            <div className="post-container">
                {posts.map(post => {
                    // once we have a db, change this to work with id
                    // anchor and key based on real id
                    return <div className="post" onClick={() => getDetail(post.id)} key={post.title}>
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Blog