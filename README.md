打包：npm run build </br>
开发模式运行：npm run start</br>
</br>
<strong>相关包配置</strong></br>
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
<strong>注意</strong>：</br>
    在配置文件script里面加   </br>
		"build":"webpack --mode production ./foo/src/index.js --output ./foo/main.js",</br>
		"dev":"webpack --mode development ./foo/src/index.js --output ./foo/main.js"一个是开发模式，一个是生产模式，后面的foo是入口文件，--output是出口文件</br>
	也可以默认不要设置出口入口文件</br>
<strong>总结</strong>：</br>
1.webpack 4.0可以是零配置操作，首先需要安装npm i webpack -g,npm i webpack webpack-cli -D</br>
2.在package.json中直接设置scripts,可以设置为"dev":"webpack"</br>
3.有一个参数是mode,模式有几种？2种，一个是development/production</br>
4.webpack的默认入口文件是./src/index.js，默认的出口文件是dist/main.js</br>
5.可以在package.json中进行自定义入口及出口的设置：入口地址 --output 出口地址</br>
6.Es6转Es5需要babel-core babel-loader babel-preset-env模块,需要创建.babelrc</br>
7.Es6转Es5有两种配置方式：</br>
1)webpack.config.js(和Vue的webpack.config.js配置中是基本一致的，应用的牧师还是webpack 2.0的加载器概念)</br>
2)module-bind(是在package.json中设置)</br>
8.要让环境支持react,先要进行npm i react-dom安装,还要进行npm i babel-preset-react 模块的安装，并且在.babelrc中配置react代码解析</br>
9.一般情况开发时我们不动入口文件,所以建议一个根级组件</br>
10.需要将React的组件代码渲染到html中，所以需要进行npm html-webpack-plugin html-loader模块的安装,在src下创建index.html,在html中并不需要手动引入任何的js文件</br>
11.html将会生成到dist目录,并且自动引入js文件</br>
12.以后项目开发过程中会引入很多的框架、类库、插件,如果所有的资源文件都打包到一个js中,那么,这个js将会变得异常大,这时候需要考虑将css能否从js中分离出来 npm i mini-css-extract-plugin css-loader,要在webpack.config.js中应用对应的插件,一定要先引入模块,并且在最后的plugins里进行new的实例化操作，还可以给插件设置相关的参数信息
html主文件将会自动的link相应的css文件，也不需要修改html文件的代码,不需要手动的引入css文件</br>
13.需要将整个项目的测试环境应用到服务器环境,所以需要npm i webpack-dev-server,然后在package.json中进行scripts配置,将webpack进行运行模式切换成webpack-dev-server,可以设置 --open等参数内容</br>


   
