import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostContext from "../Context/PostContext";
import EditForm from "./EditForm";
import CommentForm from "../Comments/CommentForm";
import CommentList from "../Comments/CommentList";
import './PostDetail.css'

const PostDetail = () => {
    const { id } = useParams();
    const { posts, setPosts } = useContext(PostContext)
    const [isShowing, setIsShowing] = useState(false)
    const navigate = useNavigate()


    const post = posts.filter(p => p.id === id)[0]
    console.log(posts)

    // If post is deleted re-direct to homepage
    if (!post) navigate('/')

    const showEditForm = () => {
        setIsShowing(true)
    }

    const deletePost = () => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    // prevents crashing upon post deletion, allows re-direct to occur
    if (post) {
        return (
            <div>
                <div className="post-container">
                    <div className="post">
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.body}</p>
                        <div className="btn-container">
                            <button onClick={showEditForm}>Edit Post</button>
                            <button onClick={deletePost}>Delete Post</button>
                        </div>
                        <div> {isShowing &&
                            <EditForm post={post} setIsShowing={setIsShowing} />}
                        </div>
                    </div>
                </div>

                <CommentList post={post} />
                <CommentForm post={post} />
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default PostDetail;