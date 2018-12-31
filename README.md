## 原因和目标;
最近读了一本书[http://webpack.wuhaolin.cn/](http://webpack.wuhaolin.cn/)<<深入浅出webpack>>,读完发现自己对webpack的掌握并不是很好，尤其是优化方面。所以想按照本书所讲的进行优化实践和学习。       
回头仔细想一想,自己虽然使用webpack两年多，但是大部分时间在各种cli工具之间进行配置的更改，似乎并没有很系统的进行过配置。所以造成了似懂非懂的局面。   
这次学习的主要目的有三个：
1.  从头学习webpackd的配置,加深自己对webpack的理解。
2.  学习如何优化webpack的打包,以及工程化的配置。
3.  依据书上的优化方案以及自己查询的方案,进行总结。写成文章，供以后使用。       
### html-webpack-plugin的使用;
分两步实现以下功能：
1.  js 实现自动注入，添加defer async等，js行内引入。压缩。ejs模板结合该插件实现自己想要的功能。
2.  css实现自动引入,添加proload等，css行内引入。压缩,去除无用的css。图片处理等。
## webpack入口文件 entry
webpack.entry可以是 string array,object sync function ;返回promise 的函数;
<code>
        entry:()=>{
        return Promise
        }       
        entry:()=>{
        return string|object|array
        }
</code>