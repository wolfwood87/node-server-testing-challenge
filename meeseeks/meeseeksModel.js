const db = require('../data/dbConfig');

module.exports = {
    add,
    remove,
    get
};

async function add(meeseek) {
    const [id] = await db('meeseeks').insert(meeseek, "id");

    return db('meeseeks')
        .where({id}).first()
}


async function remove(id) {
    const removed = await db('meeseeks').where({ id }).del();

    return removed;
}

async function get() {
    return db('meeseeks');
}

