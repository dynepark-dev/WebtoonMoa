# react frontend

## Docker

```
dev-mode
docker build -t react.dev -f Dockerfile.dev .
docker run -d --env-file ./.env -v ${PWD}\src:/app/src -p 3000:3000 --name frontend.dev react.dev
```
