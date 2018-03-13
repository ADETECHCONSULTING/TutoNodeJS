module.exports = (server) => {
  server.controller = {
      users: require('./users')(server),
      cars: require('./cars')(server)
  }
};