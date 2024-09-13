# # Docker section

## Docker Compose configuration for dev environment, used for the development process

## Start the dev environment helpers: postgres and redis

docker/dev/start:
	@docker compose up -d

## Stop the dev enviroment helpers
docker/dev/stop:
	@docker compose stop