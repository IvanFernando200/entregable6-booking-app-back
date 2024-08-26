const request = require("supertest");
const app = require("../app");
let id;
let token;

test("POST /users must create a user", async () => {
  const newUser = {
    firstName: "test",
    lastName: "tut",
    email: "ttu@gmail.com",
    password: "test1234",
    gender: "other",
  };
  const res = await request(app).post("/users").send(newUser);
  console.log(res);
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  id = res.body.id;
  expect(res.body.firstName).toBe(newUser.firstName);
});

test("POST /users/login must login the user", async () => {
  const credentials = {
    email: "ttu@gmail.com",
    password: "test1234",
  };
  const res = await request(app).post("/users/login").send(credentials);
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Object);
  expect(res.body.token).toBeDefined();
  token = res.body.token;
  expect(res.body.user.email).toBe(credentials.email);
});

test("POST /users/login must validate an error", async () => {
  const credentials = {
    email: "incorrect@gmail.com",
    password: "error1234",
  };
  const res = await request(app).post("/users/login").send(credentials);
  expect(res.status).toBe(401);
});

test("GET /users must bring all the users", async () => {
  const res = await request(app)
    .get("/users")
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("PUT /users/:id must update a user", async () => {
  const updatedUser = {
    firstName: "test updated",
  };
  const res = await request(app)
    .put(`/users/${id}`)
    .send(updatedUser)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body.firstName).toBe(updatedUser.firstName);
});

test("DELETE /users/:id must delete a user", async () => {
  const res = await request(app)
    .delete(`/users/${id}`)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(204);
});
