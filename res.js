"use strict";
// strick agar kode dijalankan ketat

exports.ok = (values, res) => {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};
