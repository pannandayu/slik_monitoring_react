# install node from docker
FROM node:18-slim

# change the directory
WORKDIR /app

COPY package*.json ./

# will download the dependencies inside the container --> creates node_modules
RUN npm install

# copy all files (local) to docker directory (/app)
COPY . .

# tell which port this image is using
EXPOSE 3000

CMD npm run build && npm start