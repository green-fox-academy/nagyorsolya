const test = require("tape");
const request = require("supertest");
const app = require("../routes");

test("groot endpoint", t => {
  // TODO: implement it
  request(app)
    .get("/yondu?distance=100.0&time=10.0")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({ distance: "100.0", time: "10.0", speed: 10.0 })
    .end(function(err, res) {
      t.error(err);
      t.end();
    });
});

test("groot endpoint", t => {
  // TODO: implement it
  request(app)
    .get("/yondu")
    .expect("Content-Type", /json/)
    .expect(404)
    .expect({error: "Please provide input parameters!"})
    .end(function(err, res) {
      t.error(err);
      t.end();
    });
});

