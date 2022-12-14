FROM node:17.0.0-slim
WORKDIR /app
RUN npm i -g nodemon
COPY package*.json ./
RUN npm install
EXPOSE 5000
