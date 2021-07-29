# Vite

## 搭建Vite项目

```js
npm init @vitejs/app   换成 npm init vite
or
yarn create @vitejs/app

// @vitejs/create-app is deprecated, use npm init vite instead

```



## eslint 规范项目代码

> eslint 是js和jsx的静态代码检测工具，在代码未运行的时候即可检测代码中是否存在错误或不规范的写法

> 通过prettier 做代码格式化

* 安装

```json
"@vue/eslint-config-prettier": "^6.0.0",
"babel-eslint": "^10.1.0",
"eslint": "^7.31.0",
"eslint-plugin-prettier": "^3.4.0",
"eslint-plugin-vue": "^7.14.0",
"prettier": "^2.3.2",
```

* 配置lint规则【根目录新建.eslintrc.js】

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // 不具备检测.vue文件的能力，所以需要装上以下的扩展插件实现对.vue文件的检测
    "plugin:vue/vue3-essential",
    // 继承一些默认的配置规则
    "eslint:recommended",
    //   "@vue/typescript/recommended",
    "@vue/prettier",
    //   "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "warn",
      {
        //  singleQuoto: none,
        //  semi: false,
        trailingComma: "es5",
      },
    ],
  },
};

```

* prettier.config.js 配置【可不加】

```js
module.exports = {
    printWidth: 100,  // 每行代码长度,默认80
    tabWidth: 2, // 每个tab代表的空格长度
    useTabs: false, // 是否使用tab进行缩进
    semi: true, // 声明结尾使用分号
    vueIndentScriptAndStyle: true,
    singleQuote: false, // 使用单引号（默认false）
    quoteProps: 'as-needed',
    bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
    trailingComma: 'es5', // 多行使用拖尾逗号
    jsxBracketSameLine: false, // 多行jsx中的> 放在最后一行结尾
    jsxSingleQuote: false,
    arrowParens: 'always', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
    insertPragma: false,
    requirePragma: false,
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'lf',
    rangeStart: 0,
  };
```

* Vscode 配置 setting.json 会自动格式化代码

```json
// 重新设定tabsize
"editor.tabSize": 2,
// 每次保存的时候将代码按eslint格式进行修复
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
// 添加 vue 支持
"eslint.validate": [
"html",
"vue",
"javascript"
],
// 每次保存的时候编辑器的自动格式化（建议关掉，用eslint来修复）
"editor.formatOnSave": false

```

* Vue `vue.congif.js`项目中配置

> 在vue-cli 3+的项目中配置eslint-loader的options来实现项目开发中保存执行eslint语法检测，并自动修复不符合eslint规则的语法，从而保证团队开发过程中的语法风格的一致性

```js
// vue.config.js

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  }
}
```



## 支持JSX【通过插件解析】

```js
npm i @vitejs/plugin-vue-jsx
```

```jsx
<script lang="jsx">
// 3.0
import { ref } from 'vue';
export default {
    setup() {
        const count = ref(0);
        const addCount = () => {
            count.value ++;
        }
        return () => (
            <>
                <div>comp</div>
                <p onClick={addCount}>{count.value}</p>
            </>
        )
    }
}
// 原始jsx
export default {
    data() {
        return {
            count: 0
        }
    },
    render() {
        return (
            <>
            <div>comp</div>
            <p onClick={this.addCount}>{this.count}</p>
            </>
        )
    },
    methods: {
        addCount(){
            this.count ++;
        }
    },
}
</script>
```

## mock插件应用

> [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) ：vite 的数据模拟插件，是基于 vite.js 开发的。
>
> 同时支持本地环境和生产环境。 Connect 服务中间件在本地使用，mockjs 在生产环境中使用。

* 安装

```js
// 运行时依赖
yarn add mockjs
# or
npm i  mockjs -S
```

and

```js
// 开发时依赖
yarn add vite-plugin-mock -D
# or
npm i vite-plugin-mock -D
```

* 配置及使用

```js
// vite.config.js 中引入插件
import { viteMockServe } from 'vite-plugin-mock';
// 配置插件
export default defineConfig({
  ...
	plugins: [vue(),vueJsx(),viteMockServe({supportTs: false})],
})

// 根目录新建mock 文件夹，github的例子copy下，新建一个接口文件
export default [
    {
      url: '/api/getUsers',
      method: 'get',
      response: ({ body }) => {
        return {
          code: 0,
          message: 'ok',
          data: ['userA','userB'],
        };
      },
    },
];
// 页面中测试
fetch('/api/getUsers').then(res=>res.json()).then(data=>{
  console.log('data :>> ', data);
  /**
  // 数据返回
  {
  	code: 0,
  	data: ["userA", "userB"],
  	message: "ok"
  }
  */
})
```

**注意一个点：须安装cross-env**

```js
# 安装cross-env
npm i cross-env -D

# package.json修改
"scripts": {
  "dev": "cross-env NODE_ENV=development vite",
   "build": "vite build",
},

```

## 整合 vue-router4 以及 vuex4 

```js
npm i vue-router@next vuex@next -S
```

* Router 使用【router/index.js】

```js
import { createRouter, createWebHashHistory } from 'vue-router';

// 工厂函数创建 router 实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('views/home.vue') }
    ]
});

export default router;
```

* Store 使用【store/index.js】

```js
import { createStore } from 'vuex';

// 工厂函数创建
export default createStore({
    state: {
        count: 0
    },
    mutations: {
        add(state){
            state.count ++
        }
    }
})

// 页面示例
<p @click="$store.commit('add')">{{$store.state.count}}</p>
```

```js
# main.js 引入
// 路由
import router from './router';

// vuex
import store from './store';
createApp(App).use(router).use(store).mount('#app');
```



## 样式管理

* 安装sass

```js
npm i sass -D
```

* 使用【styles/index.scss】

> styles 目录保存各种样式文件【公共的、抽取的、覆盖组件库的等等】
>
> `Index.scss` 作为出口组织这样样式，同时编写一些全局样式
>
> 最后在`main.js` 引入

```
# main.js
// 全局样式
import 'styles/index.scss'
```

## 整合element3

* 安装

```js
npm i element3 -S
```

* 引入

```js
# main.js
// element3
import element3 from 'plugins/element3';

# plugins/element3.js
// 全局引入element3
import element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';

// 按需加载
// import { ElButton, ElInput } from 'element3';
// import "element3/lib/theme-chalk/button.css";

export default function (app) {
    // 完整引入
    app.use(element3);

    // 按需引入
    // app.use(ElButton);
    // app.use(ElInput);
}
```



## 数据封装

> 统一封装数据请求

* 统一配置请求
* 请求、响应统一处理【异常】

> 安装及配置

* 安装`axios`

```js
npm i axios -S
```

* 添加配置文件`.env.development`

```js
VITE_BASE_API=/api
# 使用环境变量方式
import.meta.env.VITE_BASE_API
```

* 请求封装

```js
import axios from "axios";
import { Message, Msgbox } from "element3";
import store from "@/store";

// 创建axios实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_API,
  // 当发送跨域请求时携带cookie
  // withCredentials: true,
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 指定请求令牌
    // if (store.getters.token) {
    // // 自定义令牌的字段名为X-Token，根据后台再做修改
    // config.headers["X-Token"] = store.getters.token;
    // }
    config.headers["X-Token"] = "my token";
    return config;
  },
  (error) => {
    // 请求错误的统一处理
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * 通过判断状态码统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  (response) => {
    const res = response.data;

    // 如果状态码不是20000则认为有错误
    if (res.code !== 0) {
      Message.error({
        message: res.message || "Error",
        duration: 5 * 1000,
      });

      // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        Msgbox.confirm("您已登出, 请重新登录", "确认", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => { // 403、401等服务端错误码处理
    console.log("err" + error); // for debug
    const msg = showStatus(error.response.status);
    Message({
      message: msg,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

// 响应状态集合
const showStatus = (status) => {
  let message = "";
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

export default service;
```

## 项目打包部署

* 打包

```js
# 打包命令
npm run build
```

* 部署

> 可以选择手动上传dist 到服务器。但最好自动化处理，避免前面繁琐操作。

> github actions 实现CI/CD过程

**`Github Actions`**让我们可以在Github仓库中直接创建自定义的软件开发生命周期工作流程

* 准备工作

> 阿里云linux服务器【linux操作、阿里云相关操作】

### 第一步：配置workflow

> 可以让我们在push代码时自动打包并部署到阿里云服务器上，在项目根目录下创建`.github/workflows/publish.yml`

```yaml
name: 打包应用并上传阿里云

on:
	push:
		branches:
			- master

jobs:
	build:
	# runs-on 指定job任务运行所需的虚拟机环境（必填字段）
	runs-on: ubuntu-latest
	steps:
		# 获取源码
		- name: 迁出代码
		  uses: actions/checkout@master
		# 安装node
		- name: 安装node.js
		# 使用action库 actions/setup-node安装node>14
			uses: actions/setup-node@v1
			with:
				node-version: 14.0.0
				
		# 安装依赖
		- name: 安装依赖
			run: npm install
			
		# 打包
		- name: 打包
			run: npm run build
			
		# 上传阿里云
		- name: 发布到阿里云
		  uses: easingthemes/ssh-deploy@2.1.1
		  env: 
		  	# 私钥
		  	SSH_PRIVITE_KEY: ${{secrets.PRIVITE_KEY}}
		  	# scp参数
		  	ARGS: "-avzr --delete"
		  	# 源目录
		  	SOURCE: "dist"
		  	# 服务器IP
		  	REMOTE_HOST: "47.98.252.10"
		  	# 用户
		  	REMOTE_USER: "root"
		  	# 目标地址
		  	TRAGET: "/root/vite-project"
	
```

### 第二步：在github当前项目下设置私钥选项

```js
Settings——>Secrets——>New repository secret

复制本地私钥
cd .ssh
cat id_rsa

生成密钥： ssh-keygen -t rsa -C "git邮箱.com"
```

### 第三步：服务器上配置nginx

```js
# 登录远程服务器
ssh root@47.98.xx.xx
# 配置nginx
cd /etc/nginx/sites-enabled/
vi vite-project
# 添加配置
server: {
  listen 8080;
  server_name 47.98.xx.xx;
  location / {
    root /root/vite-project/dist/;
    index index.html index.htm;
  }
}
# 重启nginx
nginx -s reload
```

