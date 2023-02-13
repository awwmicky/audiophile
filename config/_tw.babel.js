const path = require('path')

// The folders containing files importing twin.macro
const includedDirectories = [
  path.resolve(__dirname, '../app'),
  path.resolve(__dirname, '../components'),
  path.resolve(__dirname, '../pages'),
  path.resolve(__dirname, '../src'),
]

// babel plugins enabling twin.macro
const pluginOptions = [
	[
		require.resolve("babel-plugin-styled-components"),
		{
			"ssr": true,
			"displayName": true,
			"preprocess": false
		},
	],
	[
		require.resolve("@babel/plugin-syntax-typescript"),
		{
			"isTSX": true
		},
	],
	[
		require.resolve("babel-plugin-twin"),
		{
			"debug": false,
			"styled": "styled-components"
		}
	],
	[
		require.resolve("babel-plugin-macros"),
		{
			"twin": {
				"preset": "styled-components"
			},
			"styledComponents": {
				"pure": true
			}
		}
	],
]

const withTwin = (nextConfig) => {
  return {
    ...nextConfig,
    webpack (config, options) {
      const { dev, isServer } = options

      config.module = config.module || {}
      config.module.rules = config.module.rules || []
      config.module.rules.push({
        include: includedDirectories,
        test: /\.(js|ts|jsx|tsx)$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: pluginOptions,
            },
          },
        ],
      })

      if (!isServer) config.resolve.fallback = {
				...(config.resolve.fallback || {}),
				fs: false,
				module: false,
				path: false,
				os: false,
				crypto: false,
			}

			return (typeof nextConfig.webpack === 'function')
        ? nextConfig.webpack(config, options)
      	: config
    },
  }
}

module.exports = withTwin
