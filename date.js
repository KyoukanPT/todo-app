exports.getDate = function() {
    const option = {
        weekday : "long",
        month : "long",
        day : "numeric"
    }
    
    return new Date().toLocaleDateString("en-US", option);
};

exports.getDay = function() {
    const option = {
        weekday : "long"
    }

    return new Date().toLocaleDateString("en-US", option);
};
