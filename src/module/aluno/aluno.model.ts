import knex from "../../service/knex";

export const getAll = async () => {
  return knex("aluno").select();
};

export const store = async (params) => {
  return knex("aluno").insert(params);
};
