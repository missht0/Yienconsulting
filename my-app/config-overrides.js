const {
	override,// 重写webpack配置
	fixBabelImports,// 修复babel导入
	addLessLoader,// 添加less-loader
	addDecoratorsLegacy,// 添加装饰器
	disableEsLint,// 禁用eslint
	addWebpackAlias// 添加webpack别名
} = require('customize-cra')
//customize-cra是一个用于修改create-react-app默认配置的库

const path = require('path')

module.exports = override(
	fixBabelImports('import', {//使antd样式生效
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({//addLessLoader作用是修改less的配置
		javascriptEnabled: true,
		// modifyVars: {'@primary-color': '#3d74aa'},
		// modifyVars: {'@primary-color': '#f9c700'},
	}),
	// addDecoratorsLegacy(),//作用是支持装饰器，装饰器是一种语法糖，可以在不改变类的情况下，为类添加新的功能
	// disableEsLint(),//作用是禁用eslint,eslint是一种代码检查工具，可以检查代码是否符合规范
	// addWebpackAlias({
	// 	'@': path.resolve(__dirname, 'src'),
	// 	'@app': path.resolve(__dirname, 'src/app'),
	// 	'@util': path.resolve(__dirname, 'src/util'),
	// 	'@constant': path.resolve(__dirname, 'src/constant'),
	// 	'@component': path.resolve(__dirname, 'src/component'),
	// }),
)
