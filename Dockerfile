FROM node:16
WORKDIR /app
COPY app/clinica/package*.json ./
RUN npm install
COPY app/clinica/. .
EXPOSE 3000
CMD "node ace serve --watch"

