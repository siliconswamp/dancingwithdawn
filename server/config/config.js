//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://admin:pass123@ds027215.mlab.com:27215/webberbc3' //place the URI of your mongo database here.
  }, 
  port: 8080 
};
