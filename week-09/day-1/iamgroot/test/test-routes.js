const test = require("tape");
const request = require("supertest");
const app = require("./routes");

//var isValidOrg = function(res) {
// res.body.should.have.property("received", "translated");
//};

test("groot endpoint", t => {
  // TODO: implement it
  request(app)
    .get("/groot?message=something")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({ received: "something", translated: "I am Groot!" })
    .end(function(err, res) {
      t.error(err);
      t.end();
    });
});

test("groot endpoint2", t => {
  request(app)
    .get("/groot")
    .expect("Content-Type", /json/)
    .expect(400)
    .expect({ error: "I am Groot!" })
    .end(function(err, res) {
      t.error(err); 
      t.end();
    });
});
