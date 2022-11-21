import app from "../../server/_globalRoutes";

describe("Home routes tester", () => {

    const supertest = require("supertest")(app);

    it("/GET get test", async () => {

        let res = await supertest
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200)

    });
});