const express = require("express");
const app = express();
const { ExpressPeerServer } = require("peer");

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log(
    `peer server started on address ${listener.address().address}:${
      listener.address().port
    }`
  );
});

const peerServer = ExpressPeerServer(listener, {
  debug: true,
  path: "/",
  alive_timeout: 600000, //10 minutes
});

app.use("/", peerServer);
