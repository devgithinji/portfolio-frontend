# Use an official Node.js runtime as a parent image
FROM node:16.18.1-alpine

# Set the working directory to /app
WORKDIR /app

# Set the environment variable for build and runtime
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=${NEXT_PUBLIC_GA_MEASUREMENT_ID}

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port that your app will run on
EXPOSE 3000

# Define the command to run your app using npm
CMD ["npm", "start"]
