# to start project

serverless offine start

# for build

npm run build

# to deploy lambda

serverless deploy

# for migrations

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo

# postman collection

go to file : serverless_demo.postman_collection.json

# eslint

npm run lint --fix

# lambda endpoints:

GET - https://7qmo5tcd39.execute-api.ap-south-1.amazonaws.com/users
GET - https://7qmo5tcd39.execute-api.ap-south-1.amazonaws.com/users/{id}
POST - https://7qmo5tcd39.execute-api.ap-south-1.amazonaws.com/users
DELETE - https://7qmo5tcd39.execute-api.ap-south-1.amazonaws.com/users/{id}
PUT - https://7qmo5tcd39.execute-api.ap-south-1.amazonaws.com/users/{id}

# swagger

http://localhost:3000/api/swagger/
