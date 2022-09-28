// describe('Authentication', () => {
//   it('should sum two numbers', () => {
//     const x = 4;
//     const y = 2;
//     const sum = x + y;
//     expect(sum).toBe(6);
//   });
// });


const request = require("supertest");

const app = require("../../src/app");
const { User } = require('./../../src/app/models');
const truncate = require("../utils/truncate");
// const factory = require("../factories");

describe("Authentication", () => {

  beforeEach(async () => {
    await truncate(); // limpa a base de dados antes de cada caso de teste
  });

//teste
  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: 'User Two',
      email: 'usertwo@example.com',
      password: '123456'
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(200);

  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await User.create({
      name: 'User Three',
      email: 'userthree@example.com',
      password: '123456'
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(response.status).toBe(401);

  });

});
// fim teste




//   it("should authenticate with valid credentials", async () => {
//     const user = await factory.create("User", {
//       password: "123123"
//     });

//     const response = await request(app)
//       .post("/sessions")
//       .send({
//         email: user.email,
//         password: "123123"
//       });

//     expect(response.status).toBe(200);
//   });

//   it("should not authenticate with invalid credentials", async () => {
//     const user = await factory.create("User", {
//       password: "123123"
//     });

//     const response = await request(app)
//       .post("/sessions")
//       .send({
//         email: user.email,
//         password: "123456"
//       });

//     expect(response.status).toBe(401);
//   });

//   it("should return jwt token when authenticated", async () => {
//     const user = await factory.create("User", {
//       password: "123123"
//     });

//     const response = await request(app)
//       .post("/sessions")
//       .send({
//         email: user.email,
//         password: "123123"
//       });

//     expect(response.body).toHaveProperty("token");
//   });

//   it("should be able to access private routes when authenticated", async () => {
//     const user = await factory.create("User", {
//       password: "123123"
//     });

//     const response = await request(app)
//       .get("/dashboard")
//       .set("Authorization", `Bearer ${user.generateToken()}`);

//     expect(response.status).toBe(200);
//   });

//   it("should not be able to access private routes without jwt token", async () => {
//     const response = await request(app).get("/dashboard");

//     expect(response.status).toBe(401);
//   });

//   it("should not be able to access private routes with invalid jwt token", async () => {
//     const response = await request(app)
//       .get("/dashboard")
//       .set("Authorization", `Bearer 123123`);

//     expect(response.status).toBe(401);
//   });
// });