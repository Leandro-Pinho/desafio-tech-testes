import knex from "knex";
import knexConfig from "../config/knex";

let conn;

function conectar() {
  if (conn) {
    return conn;
  }

  conn = knex(knexConfig);
  return conn;
}

export default conectar();
