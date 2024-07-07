module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        // "nativewind/babel",
        'module-resolver', {
          alias: {
            '@/assets':'./assets',
            '@/app': './src/app',
            '@/components':'./src/components',
            '@/styles': './src/styles',
            '@/data': './src/data',
            '@/models':'./src/models',
            // '@/providers': './src/providers',
            '@/lib': './src/lib',
            '@/slices': './src/slices'
          }
        }
      ]
    ]
  };
};
