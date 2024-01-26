# Use an official Node.js runtime as a parent image
FROM node:20.11.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

# Define the command to run the application
CMD npm start
