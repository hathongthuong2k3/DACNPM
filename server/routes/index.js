const UserRouter = require("./user");
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
}
module.exports = route;
