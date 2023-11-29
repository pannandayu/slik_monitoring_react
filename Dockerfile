FROM svr-ocp-nex-d01.muf.co.id:5000/base-img/nodejs:16.13.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install npm@7.24.0

# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Set permissions
RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

# Expose the port
EXPOSE 3000

# Build and start the application
CMD ["npm", "start"]
