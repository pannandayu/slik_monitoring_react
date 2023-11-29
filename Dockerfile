FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe-perm=true --allow-root

COPY . .

RUN chown -R 1001:0 /usr/src/app && \
    chmod -R g=u /usr/src/app

USER 1001

CMD ["npm", "run", "dev"]