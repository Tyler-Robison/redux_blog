import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionsTypes";

export const addPost = (post, id) => ({
    type: ADD_POST,
    post,
    id
})

export const removePost = (posts, id) => ({
    type: REMOVE_POST,
    posts,
    id
})

export const editPost = (editedPosts) => ({
    type: EDIT_POST,
    editedPosts
})

// editedPosts contains all posts, the correct post has a comment added to it. 
export const addComment = (editedPosts) => ({
    type: ADD_COMMENT,
    editedPosts
})

export const removeComment = (editedPosts) => ({
    type: REMOVE_COMMENT,
    editedPosts
})

