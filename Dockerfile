FROM node:12-buster
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 5000
