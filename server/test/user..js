const chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("../server");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("User", () => {
  describe("GET/", () => {
    it("should get all user", (done) => {
      chai
        .request(app)
        .get("/user")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should get detail user", (done) => {
      const id = 2;
      chai
        .request(app)
        .get(`/user/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.data.should.have.property("id");
          res.body.data.should.have.property("email");
          res.body.data.should.have.property("password");
          res.body.data.should.have.property("name");
          res.body.data.email.should.be.a("string");
          res.body.data.password.should.be.a("string");
          res.body.data.name.should.be.a("string");
          done();
        });
    });

    it("should not get a detail user", (done) => {
      const id = 40;
      chai
        .request(app)
        .get(`/user/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

describe("user", () => {
  describe("POST/", () => {
    it("should post user data", (done) => {
      const newUser = {
        email: "hanggarahadianto@gmail.com",
        password: "12345",
        name: "hangga rahadianto",
      };

      chai
        .request(app)
        .post("/user/register")
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("it should not post a user data without property", (done) => {
      const newUser = {
        email: "hanggarahadianto@gmail.com",
      };
      chai
        .request(app)
        .post("/user/register")
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

describe("user", () => {
  describe("DELETE/", () => {
    it("should delete user", (done) => {
      const id = 1;
      chai
        .request(app)
        .delete(`/user/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("it should not delete user", (done) => {
      const id = 39;
      chai
        .request(app)
        .delete(`/user/${id}`)
        .end((err, res) => {
          res.should.have.status(200);

          done();
        });
    });
  });
});
