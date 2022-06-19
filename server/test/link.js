const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();
chai.expect();

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
          res.body.data.should.have.property("id");
          res.body.data.should.have.property("title");
          res.body.data.should.have.property("description");
          res.body.data.should.have.property("image");
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

describe("link", () => {
  describe("POST/", () => {
    it("should post link data", (done) => {
      const newLink = {
        title: "Uniqlo",
        description: "Uniqlo the best fashion apparel",
      };

      chai
        .request(app)
        .post("/link")
        .send(newLink)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a("object");
          // expect(res.body).to.have.property("title");
          done();
        });
    });

    it("it should not post a user data without property", (done) => {
      const newLink = {
        title: "Adidas",
      };
      chai
        .request(app)
        .post("/link")
        .send(newLink)
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});

describe("user", () => {
  describe("DELETE/", () => {
    it("should delete link", (done) => {
      const id = 1;
      chai
        .request(app)
        .delete(`/link/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("it should not delete link", (done) => {
      const id = 39;
      chai
        .request(app)
        .delete(`/link/${id}`)
        .end((err, res) => {
          res.should.have.status(200);

          done();
        });
    });
  });
});
