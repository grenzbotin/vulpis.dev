FROM node:15.4-alpine as builder

ARG NEXT_PUBLIC_CMS_URL
ARG NEXT_PUBLIC_BACKEND_URL
ARG NEXT_PUBLIC_MAIL_ADDRESS
ARG NEXT_PUBLIC_CONTACT_ADDRESS_1
ARG NEXT_PUBLIC_CONTACT_ADDRESS_2
ARG NEXT_PUBLIC_CONTACT_PHONE
ARG NEXT_PUBLIC_USTID

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn \
  && NEXT_PUBLIC_CMS_URL=$NEXT_PUBLIC_CMS_URL \
  NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL \
  NEXT_PUBLIC_MAIL_ADDRESS=$NEXT_PUBLIC_MAIL_ADDRESS \ 
  NEXT_PUBLIC_CONTACT_ADDRESS_1=$NEXT_PUBLIC_CONTACT_ADDRESS_1 \
  NEXT_PUBLIC_CONTACT_ADDRESS_2=$NEXT_PUBLIC_CONTACT_ADDRESS_2 \
  NEXT_PUBLIC_CONTACT_PHONE=$NEXT_PUBLIC_CONTACT_PHONE \
  NEXT_PUBLIC_USTID=$NEXT_PUBLIC_USTID \
  yarn build

EXPOSE 3000
CMD yarn start