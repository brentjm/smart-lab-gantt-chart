FROM node:14 AS builder
RUN npm install --global create-react-app\
  && mkdir /app
WORKDIR /app
COPY app/ /app/.
#CMD ["/bin/bash", "-c", "sleep 10000"]
RUN npm install\
 && npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/.
COPY --from=builder /app/build/ /usr/share/nginx/html/smart-lab-gantt-chart
