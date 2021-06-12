"use strict";
// strick agar kode dijalankan ketat

exports.ok = (values, res) => {
  const data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.data();
};
