# app-service-provider-server

Application to manage registration of service providers (Web App) and where yours clients can schedule an appointment at a time available (Mobile App).

The web part can be found [here](https://github.com/mateusgiroletti/app-service-provider-web). And the mobile part can be found [here](https://github.com/mateusgiroletti/app_service_provider_mobile).

## What he does?

This repository is intended for backend part of the application, responsible for responding to requests from both web and mobile applications.

A representation of the structure and technologies used can be seen below:

<img src="./images/structure.png" alt="Structure" />

## What is your use?

Intended to apply the knowledge obtained in courses and tutorials on the internet using Nodejs, Postgres, MongoDB, Redis and Docker technologies.

## How to use?

To use the application it is recommended to have docker installed, so it is not necessary to install the database and other utilities found in the docker-compose file, but it is also possible to make some changes and up the necessary servers "manually".

Clone this project on your favorite dir:

```console
git clone https://github.com/mateusgiroletti/app-service-provider-server.git
```

Change to the root directory and install the necessary packages:

```console
cd app-service-provider-server/ && npm install
```

Edit the .env.example file to .env and put the necessary environment variables.

Start the dockers containers.

```console
docker-compose up
```

Run the migrations for create the tables in postgres:

```console
npx sequelize db:migrate
```

Finally test the application <a href="http://localhost:3333/" target="_blank">Here</a>

## Contact

If you find any errors, feel free to open an issue. If you want to talk to me personally by [Email](mailto:mateusgiroletti97@gmail.com) or [LinkedIn](https://www.linkedin.com/in/mateus-vinicios-sorgatto-giroletti-7a0647182/)
