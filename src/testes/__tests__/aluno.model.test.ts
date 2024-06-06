import { KnexService } from "../../service/knex";
import { Aluno } from "../../module/aluno/aluno.model";

describe("Aluno model Suite", () => {
  it("deve retornar valores do modelo", async () => {
    let knexServiceMock: any;

    const knexMock = () => {
      return {
        select: jest.fn().mockReturnValueOnce([]),
      };
    };

    knexServiceMock = {
      obterConexao: jest.fn(() => knexMock),
    };

    const aluno = new Aluno(knexServiceMock);
    const response = await aluno.getAll();
    // expect(response).toBeTruthy();
    expect(response.length).toBe(0);
  });


  it("deve salvar um aluno no modelo", async () => {
    let knexServiceMock: any;

    const knexMock = () => {
      return {
        insert: jest.fn().mockReturnValueOnce([100]),
      };
    };

    knexServiceMock = {
      obterConexao: jest.fn(() => knexMock),
    };

    const aluno = new Aluno(knexServiceMock);
    const response = await aluno.store({
        nome: 'Aluno teste',
        cpf: 35685245
    });
    // expect(response).toBeTruthy();
    expect(response).toEqual([100]);
  });
});
