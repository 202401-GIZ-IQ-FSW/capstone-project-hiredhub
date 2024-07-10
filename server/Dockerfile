FROM node:14

RUN mkdir -p /backend-app
WORKDIR /backend-app/
COPY package.json .
WORKDIR /backend-app/server
COPY ./server ./server
CMD [ "yarn", "run", "start" ]
