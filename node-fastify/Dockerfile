FROM node:8-alpine
WORKDIR /app
COPY . /app
RUN npm install --production
ENTRYPOINT ["npm", "start"]