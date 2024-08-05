import { faker } from '@faker-js/faker';

import prisma from "../../src/config/database";

export async function generateAndPersistRandomPhrase() {
  await prisma.phrase.create({
    data: {
      author: faker.person.fullName(),
      text: faker.lorem.sentence()
    }
  })
}