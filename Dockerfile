FROM node:10.12.0-alpine as builder

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
COPY .  /app

# RUN npm run test
RUN npm run build --prod


FROM nginx:1.14.0-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
COPY --from=builder /app/dist/hosp-web-admin /usr/share/nginx/html
