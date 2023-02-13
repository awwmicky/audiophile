/** @type {import('next').NextConfig} */
const config = require('./config/index.js')
// const withTwin = require('./_tw.next.js')

module.exports = config.withTwin({
  reactStrictMode: true,
  swcMinify: true,
	// pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
})
