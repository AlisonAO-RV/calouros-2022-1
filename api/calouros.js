const bcrypt = require("bcrypt-nodejs");

module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const save = async (req, res) => {
    const user = { ...req.body };
    if (req.params.id) user.id = req.params.id;

    try {
      existsOrError(user.name, "Nome não informado");
      existsOrError(user.email, "E-mail não informado");
      existsOrError(user.periodo, "E-mail não informado");
      existsOrError(user.turma, "periodo não informado");
      existsOrError(user.imgUrl, "URL daimagem não informado");
      existsOrError(user.imgBi, "Binario da imagem não informado");
      existsOrError(user.password, "Senha não informada");
      existsOrError(user.confirmPassword, "Confirmação de Senha inválida");
      equalsOrError(user.password, user.confirmPassword, "Senha não conferem");

      const userFromBD = await app
        .db("calouros")
        .where({ email: user.email })
        .first();
      if (!user.id) {
        notExistsOrError(userFromBD, "Calouro já cadastrado");
      }
    } catch (msg) {
      return res.status(400).send(msg);
    }

    user.password = encryptPassword(user.password);
    delete user.confirmPassword;

    if (user.id) {
      app
        .db("calouros")
        .update(user)
        .where({ id: user.id })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    } else {
      app
        .db("calouros")
        .insert(user)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const get = (req, res) => {
    app
      .db("calouros")
      .select("id", "name", "email", "periodo", "turma", "imgUrl", "imgBi")
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send(err));
  };

  const getById = (req, res) => {
    app
      .db("calouros")
      .select("id", "name", "email", "periodo", "turma", "imgUrl", "imgBi")
      .where({ id: req.params.id })
      .first()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).send(err));
  };

  return { save, get, getById };
};
