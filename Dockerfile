FROM node:14
WORKDIR /home/backend_node_ev
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]