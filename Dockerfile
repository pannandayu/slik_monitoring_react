FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe-perm=true --allow-root

COPY . .

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "dev"]