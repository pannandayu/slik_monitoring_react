# install node from docker
FROM svr-ocp-nex-d01.muf.co.id:5000/base-img/nodejs:18.17.0

# change the directory
WORKDIR /usr/src/app

COPY package*.json ./

# will download the dependencies inside the container --> creates node_modules
RUN npm install

# copy all files (local) to docker directory (/app)
COPY . .

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

RUN chown -R 1003030000:0 /.npm && \
    chown -R 1003030000:0 /usr/src/app

# tell which port this image is using
EXPOSE 3000

CMD npm run build && npm start