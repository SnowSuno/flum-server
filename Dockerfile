FROM node:18-alpine

RUN apk add --no-cache ffmpeg

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .

ENTRYPOINT ["node", "index.js"]
