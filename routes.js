"use strict";
module.exports = (app) => {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuadata);

  app.route("/tampil/:id").get(jsonku.tampilkanberdasarkanid);
};
