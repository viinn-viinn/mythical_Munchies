const client = require("./client");
const uuid = require("uuid");
const {getRecipeId} = require('./recipes');

const createTag = async ({description}) => {
  const SQL = `
  INSERT INTO tags(id, description)
  VALUES ($1, $2)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), description]);
  return response.rows[0]
};

const getTagId = async (description) => {
  const SQL = `
  SELECT *
  FROM tags
  WHERE description = $1
  `;
  // console.log(description)
  let {rows} = await client.query(SQL, [description])
  // console.log(rows)
  const tag_id = rows[0]
  return tag_id.id
};

const createRecipeTag = async ({recipe_name, description}) => {
  const tag_id = await getTagId(description)
  const recipe_id = await getRecipeId(recipe_name)
  const SQL = `
  INSERT INTO recipe_tags(id, recipe_id, tag_id)
  VALUES ($1, $2, $3)
  RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), recipe_id, tag_id])
  return response.rows;
};

module.exports = {createTag, createRecipeTag}