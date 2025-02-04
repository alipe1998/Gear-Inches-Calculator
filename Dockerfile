# Use the official lightweight Nginx image
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into Nginx's public directory
COPY . /usr/share/nginx/html

# Expose port 80 so that the container can serve content
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
