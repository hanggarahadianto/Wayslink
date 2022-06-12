let chai = require("chai");
let chaiHttp = require("chai-http");
let linkRouter = require("../routes/link");
let linkRouter = require("../index");

chai.should();

chai.use(chaiHttp);

describe("Link API", () => {
  describe("GET/link", () => {
    it("It should Get all the link", (done) => {
      chai
        .request(linkRouter)
        .get("/api/link")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(3);
          done();
        });
    });
    it("it should not get the link", (done) => {
      chai
        .request(linkRouter)
        .get("api/link")
        .end((err, response) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("get/api/link/:id", () => {
    it("it should get a link by id", (done) => {
      const id = 1;
      chai
        .request(server)
        .get("/api/link/" + id)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("title");
          response.body.should.have.property("description");

          done();
        });
    });
    it("it should not get a link by id", (done) => {
      const id = 1;
      chai
        .request(linkRouter)
        .get("/api/link/" + id)
        .end((err, response) => {
          response.should.have.status(404);
          response.text.should.be.eq("the link doesn't exist");
          done();
        });
    });
  });

  describe("post/api/link", () => {
    it("it should post a new link", (done) => {
      const link = {
        title: "Uniqlo",
        description: "the best fashion",
      };
      chai
        .request(linkRouter)
        .get("api/link")
        .send(link)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("title").eq("uniqlo");
          response.body.should.have
            .property("description")
            .eq("the best fashion");
          done();
        });
    });
    it("it should not post a link without property", (done) => {
      const link = {
        description: "brand new",
      };
      chai
        .request(linkRouter)
        .post("/api/link")
        .send(link)
        .end((err, response) => {
          response.should.status(400);
          response.text.should.be.eq(
            "the name should be at least 10 characters"
          );
          done();
        });
    });
  });
});
