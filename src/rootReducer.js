import { removePost } from "./actions/actions";
import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actions/actionsTypes";

const INITIAL_STATE = { posts: {} };

// postObj contains all posts, id marks post to delete
const removePostReducer = (postObj, id) => {
    delete postObj[id]
    return postObj
}

// const editPostReducer = (postObj) => {
//     // console.log('new', newPost)
//     // console.log('postObj', postObj)
//     // console.log('id', id)
//     // postObj[id] = newPost
//     // console.log('postObj after', postObj)
//     return postObj
// }

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: { ...state.posts, [action.id]: action.post } };

        case REMOVE_POST:
            return { ...state, posts: { ...removePostReducer(state.posts, action.id) } };


        // these 3 are identical b/c logic is entirely outside the reducer
        case EDIT_POST:
            return { ...state, posts: { ...action.editedPosts } };

        case ADD_COMMENT:
            return { ...state, posts: { ...action.editedPosts } }

        case REMOVE_COMMENT:
            return { ...state, posts: { ...action.editedPosts } }

        default:
            return state;
    }
}

export default rootReducer;