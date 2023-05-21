const Redis = require('ioredis')
const redis = new Redis({
    host: "redis",
    port: 6379,
    password: "3jGjJI2YPg9zePRkSttMKwDGo9HAiT7R"
})


module.exports = redis