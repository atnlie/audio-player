module.exports = api => {
  if (api.env() === 'production') {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        'babel-plugin-transform-remove-console',
        '@babel/plugin-transform-runtime',
      ],
      sourceMaps: true,
    };
  }
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['@babel/plugin-transform-runtime'],
    sourceMaps: true,
  };
};
