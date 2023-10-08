const exp = require("express");
const coursesApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

coursesApp.use(exp.json());
coursesApp.use(exp.urlencoded({extended:true}));

coursesApp.get(
  "/getdata/:subject",
  expressAsyncHandler(async (request, response) => {
    const subject = request.params.subject;
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    let courses = await coursesCollectionObject.findOne({
        name: subject
    });
    response.send({ message: "courses list", payload: courses });
  })
);

module.exports = coursesApp;