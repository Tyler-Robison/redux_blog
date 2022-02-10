import React, { useContext } from "react";
import PostContext from "../Context/PostContext";

const CommentList = ({ post }) => {
    const { posts, setPosts } = useContext(PostContext)

    const deleteComment = (id) => {
        const editedPosts = posts.map(p => {
            const editedComments = p.comments.filter(comment => comment.id !== id)
            p.comments = editedComments
            return p
        })
        setPosts(editedPosts)
    }

    return (
        <div className="comment-container">
            <h3>Comments</h3>
            <ol>
            {post.comments.map(comment => {
                return <li key={comment.id}>{comment.comment}
                <button onClick={()=>deleteComment(comment.id)}>X</button>
                </li>
            })}
            
            </ol>
            <p>{post.comments.length > 0 || 'None so far'}</p>
        </div>
    )
}

export default CommentList;