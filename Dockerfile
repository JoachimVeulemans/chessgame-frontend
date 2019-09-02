# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-env

WORKDIR /app/

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build --prod --output-path=/app/dist/out/

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

#COPY --from=build-env /app/dist/out/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-env /nginx.conf /etc/nginx/conf.d/default.conf
