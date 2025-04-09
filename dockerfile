FROM node:23-alpine3.20

COPY src/ /app/
COPY package.json /app/

WORKDIR  /app

RUN npm install 

CMD [ "node","server.js" ]
