const nextConfig = require('eslint-config-next')

module.exports = [
  ...nextConfig,

  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'coverage/**',

      // Build/tool configuration files
      'tailwind.config.js',
      'postcss.config.js',
      'next.config.js',
      'next.config.mjs',
    ],
  },
]