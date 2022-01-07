const sort = (items) => {
    return items.sort((a, b) => a.localeCompare(b));
};

const random = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

module.exports = { sort, random };