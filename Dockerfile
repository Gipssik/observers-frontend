FROM node:slim

WORKDIR /code/frontend

COPY ./package.json ./package-lock.json* /code/frontend/

RUN npm i

COPY . /code/frontend

RUN npm run build

EXPOSE 3000

CMD ["npm", "start", "build"]
