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

test("GET /hotels must get all the hotels", async () => {
  const res = await request(app).get("/hotels");
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("POST /hotels must create a hotel", async () => {
  const newHotel = {
    name: "Woolf glass",
    description:
      "Is a place where you can find comfortable and forget about everything",
    price: 202.6,
    address: "Mz.20 Jiron Luna",
    cityId: 9,
    lat: 2690.45,
    lon: 1559.21,
  };
  const res = await request(app)
    .post("/hotels")
    .send(newHotel)
    .set("Authorization", `Bearer ${token}`);

  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  id = res.body.id;
  expect(res.body.name).toBe(newHotel.name);
});

test("PUT /hotels/:id must update a hotel", async () => {
  const updatedHotel = {
    name: "Mi Wim wim",
  };
  const res = await request(app)
    .put(`/hotels/${id}`)
    .send(updatedHotel)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(updatedHotel.name);
});

test("DELETE /hotels/:id must delete a hotel", async () => {
  const res = await request(app)
    .delete(`/hotels/${id}`)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(204);
});
