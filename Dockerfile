FROM node:18

ENV PASSWORD=acqisme
ENV CBAS_URL=http://10.22.17.81/cbasws/getcategory
ENV MONGO_URI=mongodb://dev_revamp:dev_revamp@10.22.17.69:27017/?authSource=admin&readPreference=primary&directConnection=true&ssl=false
ENV JAVA_URL=http://slik-monitoring-java-dev.apps.ocp4dev.muf.co.id/api/slik-monitoring/search-data
ENV JAVA_URL_APPLICATION_ID=http://slik-monitoring-java-dev.apps.ocp4dev.muf.co.id/api/slik-monitoring/search-ref-application-id

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

CMD ["npm", "run", "dev"]