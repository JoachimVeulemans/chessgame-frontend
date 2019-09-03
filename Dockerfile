# 1 - Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage

# 2 - Change working directory
WORKDIR /app

# 3 - Copy package.json and package-lock.json to install dependencies
COPY package*.json /app/

# 4 - Installl dependencies
RUN npm install

# 5 - Copy project to /app directory
COPY ./ /app/

# 6 - Define the configuration of the build
ARG configuration=development

# 7 - Build the Angular project
RUN npm run build -- --output-path=./dist/out

# 8 - Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

# 9 - Copy the build output to the nginx-container
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# 10 - Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
