const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

async function add(character) {
  const [id] = await db("characters").insert(character);
  return findById(id);
}

function find() {
  return db("characters");
}

function findBy(filter) {
  return db("character").where(filter);
}

function findById(id) {
  return db("characters").where({ id }).first();
}

function update(changes, id) {
  return db("characters").where({ id }).update(changes);
}

function remove(id) {
  return db("characters").where("id", Number(id)).del();
}
