const UserRouter = require("./user");
const StaffRouter = require("./staff");
const AdminRouter = require("./admin");
const ClassRouter = require("./class");
const CourseRouter = require("./course");
const RegisterLogRouter = require("./registerlog");
const LogRouter = require("./log");
const SponsorRouter = require("./sponsor");
const FileRouter = require("./file");
const MailRouter = require("./mail");
const TeacherJoinClass = require("./teacherjoinclass");
const TeacherRouter = require("./teacher");
const StudentJoinClass = require("./studentjoinclass");
const StudentRouter = require("./student");
const { requireApiKey } = require("../src/middleware/useApiKey");

function route(app) {
  app.use("/user", UserRouter);
  app.use("/staffs", requireApiKey, StaffRouter);
  app.use("/", MailRouter);
  app.use("/users", UserRouter);
  app.use("/admins", requireApiKey, AdminRouter);
  app.use("/classes", requireApiKey, ClassRouter);
  app.use("/courses", CourseRouter);
  app.use("/register-logs", requireApiKey, RegisterLogRouter);
  app.use("/logs", requireApiKey, LogRouter);
  app.use("/sponsors", requireApiKey, SponsorRouter);
  app.use("/files", requireApiKey, FileRouter);
  app.use("/teachers", requireApiKey, TeacherRouter);
  app.use("/teacherjoinclasses", requireApiKey, TeacherJoinClass);
  app.use("/students", requireApiKey, StudentRouter);
  app.use("/studentjoinclasses", requireApiKey, StudentJoinClass);
}
module.exports = route;
