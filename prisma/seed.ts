import prisma from "../src/config/database";

async function main() {
  await prisma.phrase.createMany({
    data: [
      { author: "Winston Churchill", text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo." },
      { author: "Theodore Roosevelt", text: "Acredite que você pode, assim você já está no meio do caminho." },
      { author: "Wayne Gretzky", text: "Você perde 100% dos tiros que não dá." },
      { author: "Confúcio", text: "Não importa o quão devagar você vá, desde que você não pare." },
      { author: "Peter Drucker", text: "A melhor maneira de prever o futuro é criá-lo." },
      { author: "Vidal Sassoon", text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário." },
      { author: "Muhammad Ali", text: "Não conte os dias, faça os dias contarem." },
      { author: "Napoleon Hill", text: "A única limitação é aquela que você coloca em sua própria mente." },
      { author: "Lao Tzu", text: "A jornada de mil milhas começa com um único passo." },
      { author: "C.S. Lewis", text: "Você nunca é velho demais para traçar um novo objetivo ou sonhar um novo sonho." },
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })