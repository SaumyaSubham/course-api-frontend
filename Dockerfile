# Use an official node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve static content
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build"]
