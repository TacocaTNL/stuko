module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    overrides: [{
        files: ['src/views/**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 0,
        }
    },
    {
        files: ['src/*.vue'],
        rules: {
            'vue/no-multiple-template-root': 0,
        }
    }]
  }