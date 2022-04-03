#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
RUN npm install -g @angular/cli@latest
RUN npm run build
#stage 2
FROM nginx:latest
COPY --from=node /app/dist /usr/share/nginx/html
EXPOSE 80
