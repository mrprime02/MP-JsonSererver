const JSONServer = require('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middlewares = JSONServer.defaults()
const PORT = 3000 || process.env.PORT
MPServer.use(middlewares)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`MP Server Started at Port: ${PORT} and waiting for client request!!!`);
})