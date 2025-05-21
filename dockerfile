FROM node:22-alpine3.20
WORKDIR /backend
COPY package.json /backend/
RUN npm install
COPY ./src /backend/
EXPOSE 4000

CMD ["node", "server.js"]
