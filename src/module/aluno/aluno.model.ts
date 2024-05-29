import knex from "../../service/knex";
import { Produto, ProdutoCreate } from "./produto.d";

export const getAll = async (): Promise<Produto[] | []> => {
  return knex("aluno").select();
};

export const store = async (params: ProdutoCreate) => {
  return knex("aluno").insert(params);
};
