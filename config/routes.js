module.exports = (app) => {
  app.route("/users").post(app.api.user.save).get(app.api.user.get);
  app.route("/users/:id").put(app.api.user.save).get(app.api.user.getById);

  app.route("/calouros").post(app.api.calouros.save).get(app.api.calouros.get);
  app
    .route("/calouros/:id")
    .put(app.api.calouros.save)
    .get(app.api.calouros.getById);
};
