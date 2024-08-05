import dotenv from "dotenv";
dotenv.config();

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Daily Kindness",
      version: "0.1.0",
      description: "Frases para te inspirar e deixar seu dia melhor",
      license: {
        name: "Driven",
        url: "https://www.driven.com.br/",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
  },
  apis: ["./src/*/*.ts"],
};

export default swaggerOptions;