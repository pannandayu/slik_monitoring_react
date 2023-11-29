FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

CMD ["npm", "run", "dev"]