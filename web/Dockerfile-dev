FROM node:15.4-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./

CMD ["yarn", "start"]
