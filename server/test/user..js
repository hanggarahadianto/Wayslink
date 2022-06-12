let chai = require("chai");
let chaiHttp = require("chai-http");

let userRouter = require("../routes/user");

chai.should();
chai.use(chaiHttp);

describe("User API", () => {
  describe("get/api/user", () => {
    it("It should get all user", (done) => {
      chai
        .request(userRouter)
        .get("/api/user")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });
  });
  describe("get/api/user/:id", () => {
    it("it should get user by id", (done) => {
      const id = 1;
      chai
        .request(userRouter)
        .get("/api/userRouter" / +1)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("email");
          response.body.should.have.property("password");
          response.body.should.have.property("name");
          done();
        });
    });
    it("it should not get a user id", (done) => {
      const id = 403;
      chai
        .request(userRouter)
        .get("/api/userRouter" + id)
        .end((err, response) => {
          response.should.have.status(404);
          response.text.should.be.eq("The user id doesn't exist");
          done();
        });
    });
  });
  describe("POST /userRouter/user", () => {
    it("it should post a new user", (done) => {
      const user = {
        email: "hangga@gmail.com",
        password: "12345",
        name: "hangga rahadianto",
      };
      chai
        .request(userRouter)
        .post("/api/user")
        .send(user)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("object");
          response.body.should.have.property("email");
          response.body.should.have.property("password");
          response.body.should.have.property("name");
          done();
        });
    });
  });
});
