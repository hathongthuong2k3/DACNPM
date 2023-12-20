const UserRouter = require("./user");
<<<<<<< HEAD
const TaskRouter = require("./task");
const StaffRouter = require("./staff")

function route(app) {
  app.use("/user", UserRouter);
  app.use("/task", TaskRouter);
  app.use("/staff", StaffRouter);
=======
const AdminRouter = require("./admin");
const ClassRouter = require("./class");
const CourseRouter = require("./course");
const RegisterLogRouter = require("./registerlog");
const LogRouter = require("./log");
const SponsorRouter = require("./sponsor");
const FileRouter = require("./file");
const { requireApiKey,sendMail } = require("../src/middleware/useApiKey");

function route(app) {
  app.use("/users", UserRouter);
  app.use("/admins", requireApiKey, AdminRouter);
  app.use("/classes", requireApiKey, ClassRouter);
  app.use("/courses", requireApiKey, CourseRouter);
  app.use("/register-logs", requireApiKey, RegisterLogRouter);
  app.use("/logs", requireApiKey, LogRouter);
  app.use("/sponsors", requireApiKey, SponsorRouter);
  app.use("/files", requireApiKey, FileRouter);
  app.use("/sendMail",sendMail);
>>>>>>> 9a03af11662503505a883e36ab86f1d6fea5de36
}
module.exports = route;
