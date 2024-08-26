const request = require("supertest");
const app = require("../app");

let token;
let id;

beforeAll(async () => {
  const user = {
    email: "valdimirleon@gmail.com",
    password: "leon1234",
  };
  const res = await request(app).post("/users/login").send(user);
  token = res.body.token;
});

test("GET must get all the reviews", async () => {
  const res = await request(app).get("/reviews");
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("POST must create a review", async () => {
  const newReview = {
    rating: "4.7",
    comment: "It's a really extraordinary nice hotel",
    hotelId: 1,
    userId: 1,
  };
  const res = await request(app)
    .post("/reviews")
    .send(newReview)
    .set("Authorization", `Bearer ${token}`);

  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  id = res.body.id;
  expect(res.body.rating).toBe(newReview.rating);
});

test("DELETE must delete a review", async () => {
  const res = await request(app)
    .delete("/reviews/" + id)
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(204);
});
