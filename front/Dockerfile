FROM node:14.15.3 

CMD mkdir /usr/src/store/front
WORKDIR /usr/src/store/front
RUN dir
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm","run","start"]
#CMD ["npm","run","test-mocha"]



 


