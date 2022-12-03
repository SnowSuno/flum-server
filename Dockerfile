FROM node:18-alpine

RUN apk add --no-cache ffmpeg

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY ./src ./src

ENV FFMPEG_PATH="/usr/bin/ffmpeg"

ENTRYPOINT ["node", "src/app.js"]
