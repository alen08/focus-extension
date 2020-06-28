module.exports = {
  "extends": ["airbnb", "airbnb/hooks"],
  "plugins": ["jest"],
  "env": {
    "jest/globals": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": "off",
  },
};
