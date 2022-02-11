import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "./EditForm";
import CommentForm from "../Comments/CommentForm";
import CommentList from "../Comments/CommentList";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "../actions/actions";
import './PostDetail.css'

const PostDetail = () => {
    const { id } = useParams();
    const [isShowing, setIsShowing] = useState(false)
    const navigate = useNavigate()
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    // const post = posts.filter(p => p.id === id)[0]
    const post = posts[id]

    // If post is deleted re-direct to homepage
    if (!post) navigate('/')

    const showEditForm = () => {
        setIsShowing(true)
    }

    const deletePost = () => {
        dispatch(removePost(posts, id))
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
                            <EditForm post={post} setIsShowing={setIsShowing} id={id} />}
                        </div>
                    </div>
                </div>

                <CommentList post={post} id={id} />
                <CommentForm post={post} id={id} />
            </div>
        )
    }
    // prevents crashing upon post deletion, allows re-direct to occur
    else {
        return (
            <div></div>
        )
    }
}

export default PostDetail;