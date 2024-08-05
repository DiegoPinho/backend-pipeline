# busca a imagem para construirmos como base
FROM node:alpine 

# definir uma pasta de trabalho dentro dessa imagem
WORKDIR /usr/src

# copia o projeto para dentro da workdir
COPY . .

# opcional => dizer qual porta nós vamos expor
EXPOSE 5000

# baixar as deps
RUN npm i

# fazer a compilação do ts para js
RUN npm run build

# só roda quando vira container
CMD ["npm", "start"]