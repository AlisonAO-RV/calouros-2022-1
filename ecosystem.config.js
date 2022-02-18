module.exports = {
  apps: [
    {
      name: "calouros-2022-1",
      script: "./index.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
