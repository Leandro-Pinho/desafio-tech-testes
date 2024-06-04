import * as request from "supertest";

describe("Int - Aluno Suite", () => {
  it("##GET /aluno/teste", async () => {
    const response = await request("http://localhost:8080")
    .get("/aluno/teste")

    expect(response.status).toBe(200)
  })
});
