import React, {useContext} from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import postValidate from "./postValidate";
import PostContext from "../Context/PostContext";
import {v4 as uuid} from 'uuid'

const PostForm = () => {
    const validate = postValidate
    const navigate = useNavigate();
    const { posts, setPosts } = useContext(PostContext)

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            body: ''
        },
        validate,
        onSubmit: values => createPost(values),
    })

    const createPost = async (values) => {
        // assign id and blank comments array
        values.id = uuid()
        values.comments = [];
        setPosts([...posts, values ])
        goHome()
    }

    const goHome = () => navigate('/')
    


    return (
        <div>
            <h1>Create New Post</h1>
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
                <button type="submit">Save</button>
                <button onClick={goHome} type="button">Cancel</button>


            </form>
        </div>
    )
}

export default PostForm;