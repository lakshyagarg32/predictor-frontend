const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://predictor-api-e5jr.onrender.com",
      changeOrigin: true,
    })
  );
};
