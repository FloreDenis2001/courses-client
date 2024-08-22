FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY --from=build /usr/src/app/.next/ ./.next
COPY --from=build /usr/src/app/public/ ./public
COPY --from=build /usr/src/app/next.config.mjs ./
COPY --from=build /usr/src/app/package*.json ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "dev"]
