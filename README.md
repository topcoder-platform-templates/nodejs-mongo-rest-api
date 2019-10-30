# Starter pack for NodeJs API

## Dependencies

- runs on node.js v10.16.3
- [express 4+](http://expressjs.com/)
- [heroku](https://www.heroku.com)
- [eslint](http://eslint.org/)
- [mongodb](https://www.mongodb.com/) - docker image of mongodb
- [POSTMAN](https://www.getpostman.com) chrome extension for verification

## Configuration

- Edit configuration in `config/default.json` and
- custom environment variables names in `config/custom-environment-variables.json`,
- for example it will read **MONGODB_URI** as url of database from heroku.

Following variables can be configured:

- `authSecret` the secret for auth
- `port` the port to listen
- `logLevel` the log level `debug` or `info`
- `version` the version of api
- `MONGODB_URI` the mongo database. use "mongodb://0.0.0.0:27017/backend-api" when running api without docker.
  otherwise use "mongodb://mongo:27017/backend-api for docker api and db spin up

## Heroku deployment

- You will need to install [Heroku Toolbelt](https://toolbelt.heroku.com/) for this step if you don't already have it installed.

- In the main project folder, run the following commands:

        heroku login
        git init
        git add .
        git commit -m "init"
        heroku create
        heroku addons:create mongolab:sandbox
        git push heroku master
        heroku logs -t
        heroku open

## Local Deployment

- Please make sure to configure url of database rightly in `config/default.json` or use environment variable **MONGODB_URI**.
- mongo docker instance run : cd docker/mongo ->run docker-compose up
- set MONGODB_URI:"mongodb://0.0.0.0:27017/backend-api in default.json
- Install dependencies `npm i`
- run lint check `npm run lint`
- Start app `npm start`

## Docker Deployment

- Please make sure to configure url of database rightly in `config/default.json` or use environment variable **MONGODB_URI**.
- mongo docker instance run : cd docker/mongo ->run docker-compose up
- set MONGODB_URI:"mongodb://mongo:27017/backend-api in default.json
- docker ps -a //to check already monogo instance is running
- docker stop containerid
- docker rm containerid
- docker-compose build --no-cache
- docker-compose up

## Verification

- Load postman collection:
  - endpoints: docs/api.postman_collection.json
  - environment: docs/api.postman_environment.json
  - use Authorization header Bearer {{user_token}}

## Authentication & Authorization

- It will use [passport](http://passportjs.org/) and it could support social feature to login as twitter, facebook easily.
- It will use `src/app-passport.js` to load passport strategies in **src/passports**, you can define `auth:{name of passport strategy}` in `routes.js` of module.
- You can also define `access:[role1,role2]`, the user role name is from `src/constants.js`.
- It will check Authentication & Authorization in `src/app-routes.js` to secure the APIs.
