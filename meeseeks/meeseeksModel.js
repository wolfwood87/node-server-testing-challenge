const db = require('../data/dbConfig');

module.exports = {
    add,
    update,
    remove,
    get,
    findById
};

async function add(meeseek) {
    return null;
}

async function update(id, changes) {
    return null;
}

async function remove(id) {
    return null;
}

async function get() {
    return db('meeseeks');
}

async function findById(id) {
    return null;
}