"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = (req, res) => {
  response.ok("Aplikasi REST API berjalan!", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuadata = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan semua data mahasiswa berdasarkan id
exports.tampilkanberdasarkanid = (req, res) => {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
