# TP - Node.js - Lecomte Dylan

### Installation des dépendances :

`npm install`

### Lancement des migrations :

`npx sequelize-cli db:migrate`

### Refresh des migrations :
`npx sequelize-cli db:migrate:undo:all` puis `npx sequelize-cli db:migrate`

### Lancement des seeders :

`npx sequelize db:seed:all`

### Lancement du projet :

`npm run start` ou `npx nodemon server.js`