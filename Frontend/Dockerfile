# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Serve the app with a simple static server
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the built files
CMD ["serve", "-s", "build"]
