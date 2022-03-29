import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../../app";

const company = {
  name: "User",
  cnpj: "12345678901234",
  password: "12345678",
  cep: "12345678",
  address: "Rua 1",
  number: 12,
  state: "PR",
  city: "Paranaguá",
};

describe("Middleware test", () => {
  it("Should create a Company", async () => {
    const response = await request(app)
      .post("/companies/register")
      .send(company);

    expect(response.statusCode).toBe(201);
  });

  it("Should test if middleware(verifyDuplicateCnpj) is working", async () => {
    const response = await request(app)
      .post("/companies/register")
      .send(company);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({ message: "CNPJ already registered" });
  });
});
