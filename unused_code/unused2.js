const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // menggambil data or menampilkan data (SELECT)
  } else if (req.method === "POST") {
    // menambahkan data ke server
  } else if (req.method === "PUT") {
    // mengganti seluruh data yang dituju pada sever
  } else if (req.method === "PATCH") {
    // memodifikasi atau memperbaharui sebagai data yang kita tuju
  } else if (req.method === "DELETE") {
    //untuk menghapus data
  }
});
