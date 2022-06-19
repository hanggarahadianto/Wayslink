const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("link", () => {
  describe("Get /", () => {
    it("should get all links", (done) => {
      chai
        .request(app)
        .get("/link")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should get a single link", (done) => {
      const id = 10;
      chai
        .request(app)
        .get(`/link/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should not get a detail link", (done) => {
      const id = 50;
      chai
        .request(app)
        .get(`/link/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
