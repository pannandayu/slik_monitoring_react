FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN mkdir /.npm && chown -R 1003030000:0 /.npm
USER 1003030000
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]