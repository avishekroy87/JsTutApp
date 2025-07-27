# Stage 1: Build the Vite React application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from the Vite build (Vite outputs to /dist by default)
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional, if needed)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

#docker build -t my-js-app .
#docker run -p 80:80 my-js-app