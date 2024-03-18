const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/api/processArray", (req, res) => {
  const inputArray = req.body.inputArray;

  if (!Array.isArray(inputArray)) {
    return res.status(400).json({
      status: "Error",
      userId: null,
      emailId: null,
      collegeRollNumber: null,
      evenNumbers: null,
      oddNumbers: null,
      alphabets: null,
      message: "Input should be an array",
    });
  }

  const userId = 12345;
  const emailId = "user@example.com";
  const collegeRollNumber = "123456789";

  const evenNumbers = inputArray.filter((num) => num % 2 === 0);
  const oddNumbers = inputArray.filter((num) => num % 2 !== 0);
  const alphabets = inputArray
    .filter((item) => typeof item === "string")
    .map((str) => str.toUpperCase());

  res.status(200).json({
    status: "Success",
    userId,
    emailId,
    collegeRollNumber,
    evenNumbers,
    oddNumbers,
    alphabets,
  });
});

const PORT = process.env.PORT || 3000;
app.listen;
