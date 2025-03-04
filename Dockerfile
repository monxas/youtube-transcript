# Use the official Node.js image (Alpine version for smaller size).
FROM node:22-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
CMD [ "node", "index.js" ]

# Inform Docker that the container listens on port 3000.
EXPOSE 3000
