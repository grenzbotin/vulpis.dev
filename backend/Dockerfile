FROM node:15.4

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "server/index.js" ]