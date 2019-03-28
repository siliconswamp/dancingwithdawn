var mongoose = require('mongoose')
mongoose.connect('mongodb://remeetest:remeetest@webportaldb-shard-00-00-0n9lg.mongodb.net:27017,webportaldb-shard-00-01-0n9lg.mongodb.net:27017,webportaldb-shard-00-02-0n9lg.mongodb.net:27017/portal_db?ssl=true&replicaSet=webportaldb-shard-0&authSource=admin&retryWrites=true', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
