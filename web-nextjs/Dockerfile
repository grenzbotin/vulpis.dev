FROM node:15.4-alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn && yarn build

# Production
#FROM abiosoft/caddy:1.0.3-no-stats
#COPY --from=builder /usr/src/app/.next /srv
#COPY --from=builder /usr/src/app/Caddyfile /etc/Caddyfile

EXPOSE 3000
CMD yarn start