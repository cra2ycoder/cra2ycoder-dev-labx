FROM node:lts-slim

WORKDIR /the/workdir/path

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]