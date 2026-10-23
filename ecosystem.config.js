// PM2 process definition for the production server (/root/grox-media).
// Used by the deploy workflow when the "grox-media" process is not running:
//   pm2 start ecosystem.config.js
//
// NODE_ENV must be "production": server.mjs treats anything else as dev mode
// and would run `next dev` instead of serving the built .next output.
//
// PORT is deliberately not set here. server.mjs reads it from the server's
// .env and falls back to 7001, which is what nginx proxies to.
module.exports = {
  apps: [
    {
      name: "grox-media",
      script: "server.mjs",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
      },
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      max_memory_restart: "700M",
    },
  ],
};
