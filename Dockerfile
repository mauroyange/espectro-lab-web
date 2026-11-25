FROM nginx:1.27-alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/espectrolab.conf
COPY shared /usr/share/nginx/html/shared
COPY site /usr/share/nginx/html/site
COPY app /usr/share/nginx/html/app
EXPOSE 80
