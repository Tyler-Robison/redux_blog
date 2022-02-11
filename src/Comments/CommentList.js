import React from "react";
import { removeComment } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";

const CommentList = ({ post, id }) => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const deleteComment = (commentID) => {

        posts[id].comments = posts[id].comments.filter(comment => comment.id !== commentID)

        // better to remove here and input edited posts obj
        // or give all needed data and do deletion inside removeComment?

        dispatch(removeComment(posts))
    }

    return (
        <div className="comment-container">
            <h3>Comments</h3>
            <ol>
                {post.comments.map(comment => {
                    return <li key={comment.id}>{comment.comment}
                        <button onClick={() => deleteComment(comment.id)}>X</button>
                    </li>
                })}

            </ol>
            <p>{post.comments.length > 0 || 'None so far'}</p>
        </div>
    )
}

export default CommentList;