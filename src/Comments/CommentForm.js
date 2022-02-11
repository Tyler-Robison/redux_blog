import React from "react";
import { useFormik } from "formik";
import commentValidate from "./commentValidate";
import { v4 as uuid } from 'uuid'
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../actions/actions";

const CommentForm = ({ post, id }) => {
    const validate = commentValidate
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validate,
        onSubmit: values => formAddComment(values),
    })

    const formAddComment = (values) => {
        values.id = uuid()

        posts[id].comments.push(values)

        formik.resetForm()
        dispatch(addComment(posts))
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