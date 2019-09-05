# Chessgame Frontend

## General Summary

This project is a collaboration between Joachim Veulemans and Ian Angillis. The goal of the project is to create a website where you can play games against other people, together, an AI or yourself. You will also be able to replay famous chessgames. This is one of 4 repositories in this project:

- [Chessgame Frontend](https://github.com/JoachimVeulemans/chessgame-frontend)
- [Chessgame Backend](https://github.com/JoachimVeulemans/chessgame-backend)
- [Chessgame AI](https://github.com/JoachimVeulemans/chessgame-ai)
- [Chessgame Database](https://github.com/JoachimVeulemans/chessgame-database)

## Repository Summary

This repository will focus on the frontend part of the project. This is written in Angular.

## Demo

Navigate to [chessgame.jocawebs.be](https://chessgame.jocawebs.be) to test the website.

## Project Status

Navigate to [Trello]([https://trello.com/b/k8dXRchw/chessproject]) to view the projects status on Trello.

## Docker Hub Status

Navigate to [Docker Hub Frontend](https://hub.docker.com/r/joachimveulemans/chessgame-frontend) to view the Docker Hub status.

## Running the project locally

### Using NPM

1. Run `npm install -g @angular/cli` to install the Angular-CLI.
2. Run `ng serve` to start a server. Navigate to `http://localhost:4200/` to view output.
3. Run `ng lint` to run the linting rules.
4. Run `ng test` to run the unit tests using Karma.
5. Run `ng e2e` to run the end-to-end tests using Jasmine.
6. Run `ng build --prod` to perform a production build.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Using Docker

1. Run `docker build . --file Dockerfile --tag chessgame-frontend:latest` to build the image.
2. Run `docker run -d -p 4200:80 chessgame-frontend:latest` to start a container. Navigate to `http://localhost:4200/` to view output.

## Further Information

To get more information, please contact us by creating an issue.
