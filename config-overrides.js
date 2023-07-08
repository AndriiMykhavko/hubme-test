const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@components': path.resolve(__dirname, 'src/ui/components/'),
      '@common': path.resolve(__dirname, 'src/ui/components/common/'),
      '@view': path.resolve(__dirname, 'src/ui/view/'),
      '@constants': path.resolve(__dirname, 'src/core/constants/'),
      '@utils': path.resolve(__dirname, 'src/core/utils/'),
      '@store': path.resolve(__dirname, 'src/core/store/'),
      '@hooks': path.resolve(__dirname, 'src/ui/hooks/'),
    },
  };

  return config;
};

