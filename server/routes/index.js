const UserRouter = require("./user");
const TaskRouter = require("./task");
const StaffRouter = require("./staff")

function route(app) {
  app.use("/user", UserRouter);
  app.use("/task", TaskRouter);
  app.use("/staff", StaffRouter);
}
module.exports = route;
