const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Custom Metro config (you can add more options here)
const customConfig = {};

// Merge the default config with the custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged config with Reanimated's Metro configuration
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
