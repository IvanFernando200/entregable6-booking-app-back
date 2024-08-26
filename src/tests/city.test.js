const request = require("supertest");
const app = require("../app");

let token;
let id;

beforeAll(async () => {
  const res = await request(app).post("/users/login").send({
    email: "valdimirleon@gmail.com",
    password: "leon1234",
  });
  token = res.body.token;
});

test("GET /cities must bring all the cities", async () => {
  const res = await request(app).get("/cities");
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("POST /cities must create a city", async () => {
  const newCity = {
    name: "Lima",
    country: "Peru",
    countryId: "PE",
  };
  const res = await request(app)
    .post("/cities")
    .send(newCity)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  id = res.body.id;
  expect(res.body.name).toBe(newCity.name);
});

test("PUT /cities/:id must update a city", async () => {
  const updatedCity = {
    name: "Ayacucho",
  };
  const res = await request(app)
    .put(`/cities/${id}`)
    .send(updatedCity)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(updatedCity.name);
});

test("DELETE /cities/:id must delete a city", async () => {
  const res = await request(app)
    .delete(`/cities/${id}`)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(204);
});
