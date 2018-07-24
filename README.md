打包：npm run build </br>
开发模式运行：npm run start

相关包配置
1.cnpm i webpack -g
2.cnpm i webpack webpack-cli -D
3.npm init -y
4.cnpm i babel-core babel-loader babel-preset-env -D
5.cnpm i react react-dom -S
6.cnpm i babel-preset-react -D
7.cnpm i html-webpack-plugin html-loader -D
8.cnpm i mini-css-extract-plugin css-loader -D
9.cnpm i webpack-dev-server -D
10.cnpm i sass-loader -D
11.cnpm i node-sass -D
注意：
    在配置文件script里面加   
		"build":"webpack --mode production ./foo/src/index.js --output ./foo/main.js",
		"dev":"webpack --mode development ./foo/src/index.js --output ./foo/main.js"一个是开发模式，一个是生产模式，后面的foo是入口文件，--output是出口文件
	也可以默认不要设置出口入口文件
   
