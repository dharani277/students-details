const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5000;

let userDetails = [
  {
    id: 1,
    name: "Dharani",
    email: "dharani27@gmail.com",
    mobile_number: "9876543210",
  },
  {
    id: 2,
    name: "Monisha",
    email: "monijii34@gmail.com",
    mobile_number: "9423133234",
  },
  {
    id: 3,
    name: "Shalini",
    email: "shalu07@gmail.com",
    mobile_number: "9093241311",
  },
  {
    id: 4,
    name: "Deebika",
    email: "deepi87@gmail.com",
    mobile_number: "9423441230",
  },
  {
    id: 5,
    name: "Suganya",
    email: "sugu123@gmail.com",
    mobile_number: "9423241234",
  },
];

app.listen(port, () => console.log("your app is running in", port));

app.get("/", (req, res) => {
  res.send("<h1>Simple GET & POST request app..! </h1>");
});

app.get("/users", (req, res) => {
  res.json(userDetails);

  // res.json()
  // res.send()
});

app.post("/users", (req, res) => {
  userDetails.push(req.body);
  res.json({
    message: "User Created..!!",
  });
});

app.put("/users", (req, res) => {
  console.log(req.params.id);
  userDetails.forEach((elem) => {
    if (elem.id == req.params.id) {
      elem.name = req.body.name;
      elem.email = req.body.email;
      elem.mobile_number = req.body.mobile_number;
      res.status(200).send({
        message: "User Updated..!",
      });
    } else {
      res.send({
        message: "Invalid id",
      });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  console.log(req.params.id);

  let filterVal = userDetails.filter((elem) => {
    if (elem.id == req.params.id) {
      return elem;
    }
  })[0];

  let index = userDetails.indexOf(filterVal);
  userDetails.splice(index, 1);

  // //use it if needed
  // userDetails = filterVal;
  // delete userDetails[index];
  res.send(userDetails);
});
