import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve(path.dirname(""));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  let day = new Date().getDay();
  let hour = new Date().getHours();
  console.log(day, hour);

  if (1 < day && day < 6 && 8 < hour && hour < 18) {
    next();
  } else {
    res.send("<h1>dont work!</h1>");
  }
});

app.use("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use("/services", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.use("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "contactUs.html"));
});
app.listen(3000);
