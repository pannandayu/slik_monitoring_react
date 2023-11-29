FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]