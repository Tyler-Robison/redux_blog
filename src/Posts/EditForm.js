import React from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import editValidate from "./postValidate";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../actions/actions";


const EditForm = ({ post, setIsShowing, id }) => {
    const validate = editValidate
    const navigate = useNavigate();
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    // needs to be let, values change upon edit
    let initialValues = {
        title: post.title,
        description: post.description,
        body: post.body
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => formEditPost(values),
    })

    // form values don't contain post comments, have to add them manually
    const formEditPost = async (values) => {
        values.comments = post.comments;
        posts[id] = values

        // populate form with new post values
        initialValues = formik.values

        formik.resetForm({
            values: initialValues
        })

        dispatch(editPost(posts))
        goBack()
    }

    const goBack = () => {
        setIsShowing(false);
        navigate(`/posts/${post.id}`);
    }

    return (
        <div>
            <hr></hr>
            <h1>Edit Post</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title && (
                        <div>{formik.errors.title}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description && (
                        <div>{formik.errors.description}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        id="body"
                        name="body"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.body}
                    />
                    {formik.touched.body && formik.errors.body && (
                        <div>{formik.errors.body}</div>
                    )}
                </div>
                <button type="submit">Edit</button>
                <button onClick={goBack} type="button">Cancel</button>


            </form>
        </div>
    )
}

export default EditForm;