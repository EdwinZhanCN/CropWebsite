# Start with a base image containing Node.js
FROM node:22-alpine

# Name of the image
LABEL Name=cropwebsite-frontend

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend code into the container
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3456

# Start the application
CMD ["npm", "start"]