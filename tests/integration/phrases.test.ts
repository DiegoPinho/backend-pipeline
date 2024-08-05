import supertest from "supertest";
import httpStatus from "http-status";
import app from "../../src/app";
import prisma from "../../src/config/database";
import { generateAndPersistRandomPhrase } from "../factories/phrases-factory";

const api = supertest(app);

beforeEach(async () => {
  await prisma.phrase.deleteMany();
});

describe("GET /phrases", () => {

  it("should return a phrase", async () => {
    await generateAndPersistRandomPhrase();

    const { body, status } = await api.get("/phrases");
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual({
      id: expect.any(Number),
      text: expect.any(String),
      author: expect.any(String)
    })
  });

  it("should return status code 404 if there's not any phrases", async () => {
    const { text, status } = await api.get("/phrases");
    expect(status).toBe(httpStatus.NOT_FOUND);
    expect(text).toBe("Ainda não há frases cadastradas.");
  });

});