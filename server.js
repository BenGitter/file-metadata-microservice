var express = require("express");
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var cors = require("cors");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/upload", upload.single("upfile"), (req, res) => {
  res.json({name: req.file.originalname, size: req.file.size});
});

app.listen(port, () => console.log("App listening on port", port));