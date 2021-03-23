// Uncomment the three loaders if you want to use stylys with react. This is not supported natively in CRA.
// If you want to use sass/scss/less, better use CRA because it has better support.

const dependencies = {
  "@babel/core": "^7.9.6",
  "@babel/preset-env": "^7.9.6",
  "@babel/preset-react": "^7.9.4",
  "babel-loader": "^8.1.0",
  "babel-polyfill": "^6.26.0",
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-hot-loader": "^4.12.21",
  "stylus": "^0.54.7",
  // "css-loader": "^3.5.3",
  // "style-loader": "^1.2.1",
  // "stylus-loader": "^3.0.2",
  "file-loader": "^6.0.0",
}

// Don't change these because there are some inconsistencies with webpack-cli where the latest version does not work with webpack 5.
// If you use webpack-cli v4, you cannot use webpack-dev-server. You have to se modified start script.

const devDependencies = {
  "webpack": "^5.11.0",
  "webpack-cli": "3",
  "webpack-dev-server": "^3.11.0" 
}

// Use the commented start script instead of the first one if you use webpack-cli v4.

const scripts = {
  "start": "webpack-dev-server --open",
  "build": "webpack --mode production",
  // "start": "webpack server --mode development"
}
