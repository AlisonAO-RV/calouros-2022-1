// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "108.179.193.5",
      port: 3306,
      user: "dakin853_aao2022",
      password: "AAO@31220aao",
      database: "dakin853_calouros_2022_1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: "108.179.193.5",
      port: 3306,
      user: "dakin853_aao2022",
      password: "AAO@31220aao",
      database: "dakin853_calouros_2022_1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
