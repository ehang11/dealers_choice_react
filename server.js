const express = require("express");
const app = express();
const path = require("path");
const { syncAndSeed } = require("./db");
const { conn } = require("./db");

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);
const init = async () => {
  try {
    await syncAndSeed();
    const PORT = process.env.PORT || 9090;
    app.listen(PORT, () =>
      console.log(`
        LISTENING ON PORT ${PORT}

        http://localhost:${PORT}/
        `)
    );
  } catch (error) {
    console.log(error);
  }
};

init();
