> ## [Event Loop](https://blog.csdn.net/weixin_41806099/article/details/103573150)

> ## [2分钟了解 JavaScript Event Loop | 面试必备](https://www.bilibili.com/video/BV1kf4y1U7Ln?spm_id_from=333.788.b_636f6d6d656e74.26)
js 事件循环基础

宏任务（Macrotask）：script（整体代码）、setTimeout、setImmediate 、setInterval、XMLHttpRequest.prototype.onload、I/O、UI 渲染

微任务（Microtask）：Promise、MutationObserver、Object.observe

任务优先级：process.nextTick > promise.then > setTimeOut > setImmediate

- setImmediate：Node.js 发现使用 setTimeout 和 setInterval 有些小弊端，所以设计了个 setImmediate，该方法被设计为一旦在当前轮询阶段完成，就执行这个脚本。
  
 微任务是跟屁虫，一直跟着$\color{#FF3030}{当前}$宏任务后面代码执行到一个微任务就跟上，一个接着一个
   
***

```javascript
console.log(1);

setTimeout(() => {
  console.log(9)
}, 0);

setTimeout(() => {
  console.log(10);
  setTimeout(() => {
    console.log(12);
  });
  Promise.resolve().then(() => {
    console.log(11);
  });
}, 200);

Promise.resolve()
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(8);
  });
Promise.resolve().then(() => {
  console.log(6)
});
new Promise((resolve) => {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(() => {
  console.log(7);
})
console.log(4)
```