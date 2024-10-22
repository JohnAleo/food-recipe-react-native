module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    [
      'module-resolver',
      {
        root: ['./'],
        alias:{
          '@/utils':'./src/utils',
          '@/components':'./src/components',
          '@/constants':'./src/constants',
          '@/navigators':'./src/navigators',
          '@/screens': './src/screens',
          '@/theme': './src/theme',
          '@/icons':'./src/recourse/icons',
          '@/component':'./src/component',
        },
      },
    ],
    "react-native-reanimated/plugin",
  ]
};
