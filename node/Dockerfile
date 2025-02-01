#Imagem NODE Alphine com Alias - Builder
FROM node:current-alpine3.20 AS builder

#Definindo diretorio de atuação
WORKDIR /usr/src/app

COPY . .

# DOCKERIZE - wait for other process
ENV DOCKERIZE_VERSION=v0.9.2

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

EXPOSE 3000

# CMD ["node","index.js"]
