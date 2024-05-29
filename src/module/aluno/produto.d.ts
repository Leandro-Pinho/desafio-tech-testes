export interface Produto {
  id: number;
  nome: string;
  cpf: number;
}

export interface ProdutoCreate {
  nome: string;
  cpf: number;
}
