# Root directory Makefile

.PHONY: up down install-backend

up:
    @echo "Starting containers..."
    docker-compose up --build

down:
    @echo "Stopping containers..."
    docker-compose down

install-backend:
    @echo "Installing backend dependencies..."
    docker-compose run backend make -C backend install
