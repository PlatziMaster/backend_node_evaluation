FROM node:12

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

COPY --from=builder ["/usr/src/index.js", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]