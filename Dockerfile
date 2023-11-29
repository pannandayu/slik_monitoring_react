# install node from docker
FROM node:18

COPY package*.json ./

# change the directory
WORKDIR /app

# copy all files (local) to docker directory (/app)
COPY . .

# will download the dependencies inside the container --> creates node_modules
RUN npm install

# tell which port this image is using
EXPOSE 3000

CMD ["sh", "-c", "npm run build && npm start"]