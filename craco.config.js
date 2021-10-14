const path = require("path");
const CraLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constant": path.resolve(__dirname, "src/constant"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
      "@models": path.resolve(__dirname, "src/models"),
      "@labs": path.resolve(__dirname, "src/labs"),
    },
  },
  plugins: [
    {
      plugin: CraLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#a932f5",
              "@link-color": "#a932f5",
              "@border-radius-base": "2px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
