import React, { useContext } from "react";
import { useFormik } from "formik";
import commentValidate from "./commentValidate";
import PostContext from "../Context/PostContext";
import { v4 as uuid } from 'uuid'

const CommentForm = ({ post }) => {
    const validate = commentValidate
    const { posts, setPosts } = useContext(PostContext)

    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validate,
        onSubmit: values => addComment(values),
    })

    const addComment = (values) => {
        values.id = uuid()

        const editedPosts = posts.map(p => {
            if (p.id === post.id) {
                p.comments.push(values)
                return p
            } else {
                return p
            }
        })
        formik.resetForm()
        setPosts(editedPosts)
    }


    return (
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <input
                        id="comment"
                        name="comment"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}
                    />
                    {formik.touched.comment && formik.errors.comment && (
                        <div>{formik.errors.comment}</div>
                    )}
                </div>

                <button type="submit">Add</button>
            </form>
    )
}

export default CommentForm;