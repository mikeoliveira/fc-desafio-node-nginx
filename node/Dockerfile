#Imagem NODE Alphine com Alias - Builder
FROM node:23-alpine3.21 AS builder

#Definindo diretorio de atuação
WORKDIR /usr/src/app

# DOCKERIZE - wait for other process
ENV DOCKERIZE_VERSION=v0.9.2

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

COPY package.json package-lock.json ./

RUN npm install

COPY . .