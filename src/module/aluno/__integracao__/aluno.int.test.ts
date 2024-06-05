import * as request from "supertest";

describe("Int - Aluno Suite", () => {
  it("##GET /aluno", async () => {
    const response = await request("http://localhost:8080").get("/aluno");

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(27);
  });

  it("##POST /aluno", async () => {
    const response = await request("http://localhost:8080")
      .post("/aluno")
      .send({
        nome: "Pedro",
        cpf: 85465895,
      });

    expect(response.status).toBe(201);
    expect(response.body.data).toHaveLength(1);
  });

  it("##POST /aluno errado", async () => {
    const response = await request("http://localhost:8080")
      .post("/aluno")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.msg).toEqual("Nome e CPF são obrigatorios");
  });
});
