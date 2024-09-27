FROM node:21-alpine
#FROM node:22.9.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]
