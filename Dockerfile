# install node from nexus registry
FROM svr-ocp-nex-d01.muf.co.id:5000/base-img/nodejs:18.17.0

# change the directory
WORKDIR /usr/src/app

# change mode
RUN chmod -R 755 /usr/src/app

# copy package and package-lock (dependencies and configurations) to docker directory (/usr/src/app)
COPY package*.json ./

# download the dependencies inside the container --> creates node_modules
RUN npm install

# copy all files (local) to docker directory (/usr/src/app)
COPY . .

# change group and change mode
RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

# tell which port this image is using
EXPOSE 3000

# execute npm run build (build) and npm start (start next js in production mode)
CMD npm run build && npm start