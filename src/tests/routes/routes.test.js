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

describe("Company Tests", () => {
  it("Should create a User 1", async () => {
    const response = await request(app)
      .post("/companies/register")
      .send(company);

    expect(response.statusCode).toBe(201);
  });

  it("Should company", async () => {
    const response = await request(app).post("/users").send(company);

    expect(response.statusCode).toBe(404);
    expect(response.body).toStrictEqual({});
  });

  it("Should get users", async () => {
    const response = await request(app).get("/companies");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });
});
