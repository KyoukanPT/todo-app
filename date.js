exports.getDate = () => {
    const option = {
        weekday : "long",
        month : "long",
        day : "numeric"
    };
    
    return new Date().toLocaleDateString("en-US", option);
};

exports.getDay = () => {
    const option = {
        weekday : "long"
    };

    return new Date().toLocaleDateString("en-US", option);
};
