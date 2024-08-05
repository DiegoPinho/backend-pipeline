import { Request, Response } from "express";
import prisma from "../config/database";
import httpStatus from "http-status";

export async function getMotivacionalPhrase(req: Request, res: Response) {
  const count = await prisma.phrase.count();
  if (count === 0) return res.status(httpStatus.NOT_FOUND).send("Ainda não há frases cadastradas.");

  const randomIndex = Math.floor(Math.random() * count);
  const [randomPhrase] = await prisma.phrase.findMany({
    take: 1,
    skip: randomIndex,
  });

  return res.send(randomPhrase);
}