const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Route untuk halaman login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, index.html));
});

// Route untuk proses login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Cek kredensial sederhana (username: admin, password: 12345)
  if (username === "admin" && password === "12345") {
    res.send('<h1>Login Berhasil!</h1><a href="/">Kembali</a>');
  } else {
    res.send('<h1>Login Gagal! Coba Lagi.</h1><a href="/">Kembali</a>');
  }
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
