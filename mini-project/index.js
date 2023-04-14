const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;
// cors();
app.use(bodyParser.urlencoded({ extended: true }));

const submissions = [];

app.post("/form", (req, res) => {
  const { id, name, color, price } = req.body;
  const submission = { id, name, color, price };
  submissions.push(submission);
  console.log(submissions);
  res.redirect("/submissions");
});

app.get("/submissions", (req, res) => {
  res.send(console.log(submissions));
});

app.put("/submissions/:id", (req, res) => {
  const id = req.params.id;
  const { name, color, price } = req.body;
  const submission = submissions[id];
  submission.name = name;
  submission.color = color;
  submission.price = price;
  res.send(`Submission with ID ${id} updated.`);
});

app.delete("/submissions/:id", (req, res) => {
  const id = req.params.id;
  submissions.splice(id, 1);
  res.send(`Submission with ID ${id} deleted.`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
