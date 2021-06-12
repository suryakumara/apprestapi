"use strict";

const response = require("./res");
const connection = require("./koneksi");
const { query } = require("./koneksi");

exports.index = (req, res) => {
  response.ok("Aplikasi REST API berjalan!", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuadata = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (error, rows, fields) => {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
