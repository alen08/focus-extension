module.exports = {
  stories: ['../src/components/**/*.stories.(j|t)sx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-typescript'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
