FROM node:10-alpine AS builder
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:10-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=production
COPY --from=builder /usr/src/app/dist/ ./dist/
COPY ./views ./views
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
