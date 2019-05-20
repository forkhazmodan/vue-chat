# Vue-chat
1.First run:  
```$xslt
npm install
```
2.Create set your config in /api/config/config.json 
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "chat",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
3.Run migrations
```$xslt
// Go to api dir
cd ~/api

// Do migrations
npx sequelize-cli db:migrate

// Undo migrations
npx sequelize-cli db:migrate:undo

// Or 
npx sequelize-cli db:migrate:undo:all
```

