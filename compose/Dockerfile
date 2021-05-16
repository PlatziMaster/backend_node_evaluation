FROM node:10-alpine

RUN mkdir /app/
WORKDIR /app/

COPY COPY package*.json ./
RUN npm install
COPY . . 

CMD npm run dev