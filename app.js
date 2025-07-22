import express from "express";

import employees from "#db/employees";

const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomElement = employees[Math.floor(Math.random() * employees.length)];
  res.send(randomElement);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const num = Number(id);
  const employee = employees.find(emp => emp.id === num);
  if (!employee) {
    return res.status(404).send("DNE");
  }
  res.send(employee);
});
