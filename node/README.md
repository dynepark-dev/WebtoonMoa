# nodejs backend

## Docker

```
dev-mode
docker build -t express.dev -f Dockerfile.dev .
docker run -d --env-file ./.env -v /app/node_modules -v ${PWD}:/app -p 3001:3001 --name backend.dev express.dev
```
