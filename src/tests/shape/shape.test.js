import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../../app";

const company = {
  name: "User",
  password: "12345678",
  cep: "12345678",
  address: "Rua 1",
  number: 12,
  state: "PR",
  city: "Paranaguá",
};

const resp = {
  error: "Campo de cnpj obrigatório",
};

describe("Yup Test", () => {
  it("Should not be able to create a company without cnpj", async () => {
    const response = await request(app)
      .post("/companies/register")
      .send(company);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(resp);
  });
});
