# Imagem oficial do Nginx
FROM nginx:alpine

# Copiar configuração personalizada do Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# DOCKERIZE - wait for other process
ENV DOCKERIZE_VERSION=v0.9.2

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

CMD ["nginx", "-g", "daemon off;"]