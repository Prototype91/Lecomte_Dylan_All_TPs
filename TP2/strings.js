const slug = require('slug');

const slugifyString = (string) => {
    return slug(string, '_');
};

const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

module.exports = { slugifyString, toTitleCase };