## 谈谈webpack优化
- 缩小文件搜索范围： 通过exclude、include 缩小搜索范围
- 缓存之前构建过的js
- 提前构建第三方库（DllPlugin）
- 并行构建而不是同步构建
  - 采用HappyPack开启多进程Loader
  - ThreadLoader开启多进程
  - 采用Oneof
- HMR 模块热替换: 全称Hot Module Replacement 热模块替换，作用是当一个模块发生改变时，之后只会打包这样一个模块（而不是打包所有模块），极大提升构建速度。
- 压缩打包体积
  - 删除冗余代码
    使用TreeShaking删除无用代码，这里的无用指的是当发现引入模块的某些内容在其他地方并没有使用时，就被当作无用节点，从而被删掉。看起来时高级的技术，但是在有些版本也有被误杀的可能性。
  - 去掉console.log
## vue webpack
- vue-router路由懒加载
- webpack压缩图片（减少图片大小）
- 打包后的js过大，将js打包多个文件
- 去掉不必要的插件
- gzip压缩
- 服务器缓存(静态资源)
- 

