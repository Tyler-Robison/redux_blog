const postValidate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title Required';
    }

    if (!values.description) {
        errors.description = 'Description Required';
    }

    if (!values.body) {
        errors.body = 'Post must have body';
    }

    return errors;
};

export default postValidate