FROM node:20

WORKDIR /the/workdir/path

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]