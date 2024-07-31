# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build Storybook (Optional: If you have a build script for Storybook)
RUN yarn build-storybook

# Expose the port that Storybook will run on
EXPOSE 8083

# Run Storybook
CMD ["yarn", "storybook", "-p", "8083"]
