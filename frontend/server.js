const express = require("express");
const axios = require("axios");

const app = express();

// Form data read karne ke liye
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <h1>Student Registration Form</h1>

    <form action="/submit" method="POST">

      <label>Name:</label><br>
      <input type="text" name="name" required><br><br>

      <label>Email:</label><br>
      <input type="email" name="email" required><br><br>

      <button type="submit">Submit</button>

    </form>
  `);
});

// Form Submit
app.post("/submit", async (req, res) => {

  try {

    const response = await axios.post(
      "http://backend:5000/submit",
      req.body
    );

    res.send(response.data);

  } catch (error) {

    res.send("Backend is not running.");

  }

});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});