const Express = require('express');

module.exports = () => {

  const App = Express();
  App.get("/", (Request, Response) => {
    const Ping = new Date();
    Ping.setHours(Ping.getHours() - 3);
    Response.sendStatus(200);
  });
  App.listen(process.env.PORT);

};