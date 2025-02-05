FROM node:20.18.1-alpine3.21

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

COPY package*json .

RUN npm install 

COPY . .

RUN chown -R app:app /app

ENV API_URI=http://api.myapp.com/

EXPOSE 3000

USER app

RUN mkdir data

CMD [ "npm", "run" , "dev"]