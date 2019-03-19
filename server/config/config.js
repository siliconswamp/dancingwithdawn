//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://remeetest:remeetest@webportaldb-shard-00-00-0n9lg.mongodb.net:27017,webportaldb-shard-00-01-0n9lg.mongodb.net:27017,webportaldb-shard-00-02-0n9lg.mongodb.net:27017/portal_db?ssl=true&replicaSet=webportaldb-shard-0&authSource=admin&retryWrites=true'
  },
  port: process.env.PORT||8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */