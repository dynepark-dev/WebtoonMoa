# nginx

## Docker

```
CMD
docker build -t docker:1.0 -f Dockerfile.dev .
docker run --name webserver -p 80:80 -d nginx:1.0
docker run -d -v /conf/dev.conf:/etc/nginx/conf.d/default/conf -p 80:80 --name webserver1 nginx:1.0
```
