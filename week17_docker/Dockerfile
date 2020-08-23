# include base image
FROM node:alpine

#install dependency
COPY ./package.json ./
RUN npm install

#copy rest fuke
# ซ้ายคือ path เรา ขวาคือ path ใน docker container
COPY ./ ./

#default command
CMD ["node", "index.js"]