FROM node:19-slim
WORKDIR /app
RUN npm i -g nodemon
COPY package*.json ./
RUN npm install
EXPOSE 5000
