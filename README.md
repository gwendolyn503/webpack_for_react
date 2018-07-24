打包：npm run build </br>
开发模式运行：npm run start</br>

相关包配置</br>
1.cnpm i webpack -g</br>
2.cnpm i webpack webpack-cli -D</br>
3.npm init -y</br>
4.cnpm i babel-core babel-loader babel-preset-env -D</br>
5.cnpm i react react-dom -S</br>
6.cnpm i babel-preset-react -D</br>
7.cnpm i html-webpack-plugin html-loader -D</br>
8.cnpm i mini-css-extract-plugin css-loader -D</br>
9.cnpm i webpack-dev-server -D</br>
10.cnpm i sass-loader -D</br>
11.cnpm i node-sass -D</br>
注意：</br>
    在配置文件script里面加   </br>
		"build":"webpack --mode production ./foo/src/index.js --output ./foo/main.js",</br>
		"dev":"webpack --mode development ./foo/src/index.js --output ./foo/main.js"一个是开发模式，一个是生产模式，后面的foo是入口文件，--output是出口文件</br>
	也可以默认不要设置出口入口文件</br>
   
