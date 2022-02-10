const commentValidate = values => {
    const errors = {};

    if (!values.comment) {
        errors.comment = "Can't add blank comment";
    }

    return errors;
};

export default commentValidate