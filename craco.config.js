const path = require("path");
const CraLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@common": path.resolve(__dirname, "src/common"),
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
