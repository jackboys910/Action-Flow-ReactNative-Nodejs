module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@components': './app/components',
          '@store': './app/store',
          '@constants': './app/constants',
          '@hooks': './app/hooks',
          '@utils': './app/utils',
          '@interfaces': './app/interfaces',
          '@shared': './app/shared',
          '@api': './api',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
