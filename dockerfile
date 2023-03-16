FROM node:lts-alpine3.16

COPY package.json  /app/
COPY src /app/

WORKDIR /app

RUN npm i 

CMD [ "node", "server.js" ]