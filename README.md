

## 2-3-1

`import React, { Component } from 'react'; class App extends Component `
等同于
`import React from 'react'; class App extends React.Component `

## 2-3-2

`import React, { Component } from 'react'; class App extends Component `
等同于
`import React from 'react'; class App extends React.Component `

## 2-4-2

`import React, { Component } from 'react';`
等同于
```
import React from 'react';
const Component = React.Component
```

## 3-1-1

`import React, { Component } from 'react';`
等同于
```
import React from 'react';
const Component = React.Component
```

## 3-1-2

必须包裹在一个父元素中

## 3-1-3

必须包裹在一个父元素中

## 3-1-4

input绑定gst


## 3-2-1

input绑定gst


## 3-2-2

打印事件的e

## 3-2-3

console.log(e.target.value);

## 3-2-4

 this.setState-undefined

## 3-2-5

bind(this)

## 3-3-1

bind(this)

## 3-3-2

提交时清空inputValue

## 3-3-3

增加元素的key

## 3-3-4

事件传递参数


## 3-3-5

事件传递参数


## 3-3-6

删除一个

## 3-3-7

违反immutable原则

## 3-4-1

use className

## 3-4-2

dangerouslySetInnerHTML

## 3-4-3

增加<label>

## 3-4-4

label的htmlFor和多行注释

## 3-5-1

拆分组件

## 3-5-2

父组件向子组件传递数据

## 3-5-3

在contructor中bind
父组件向子组件传递方法来改变父组件数据

## 3-6-1

bind(this)放在constructor中

## 3-6-2

方法拆分

## 3-6-3

异步setState接lambda
异步setState解决e.taget.value问题

## 3-6-4

lamda用preState参数


## 4-2-1

PropTypes类型校验

## 4-2-2

PropTypes.string应对空的情况


## 4-2-3

PropTypes.string.isRequired的默认值
https://reactjs.org/docs/typechecking-with-proptypes.html
one of type

## 4-2-4

1. 父组件render被执行时，子组件render都会被重新执行
1. 当组件的state或者props发生改变时，render函数都会被重新执行。

此粒中TodoList的state改变，render重新执行，Test子组件render重新执行。


## 4-2-5

1. state数据
2. jsx模板
3. 数据+模板 结合，生成真实的dom
4. state改变，
5. 数据+模板生成真实的dom，替换原始的dom

### 缺陷
非常耗费性能

### 改良1
1. state数据
2. jsx模板
3. 数据+模板 结合，生成真实的dom
4. state改变，
5. 数据+模板生成真实的dom，比对找差异
6. 使用差异替换

### 改良2
1. state数据
2. jsx模板
3. 数据+模板 结合，生成真实的dom
4. 生成虚拟dom(虚拟dom就是1个js对象)(损耗性能，生成js对象损耗性能小，生成真实dom损耗大)
5. state改变
6. 生成新的虚拟dom（提升性能）
7. 比较原始虚拟dom和新的虚拟dom的区别(提升性能)
8. 直接操作dom，改变span中的内容



## 4-5-1

### 真正实现

1. state数据
2. jsx模板
1. 生成虚拟dom(虚拟dom就是1个js对象)(损耗性能，生成js对象损耗性能小，生成真实dom损耗大)
1. 虚拟dom来生成真实的dom
5. state改变
6. 生成新的虚拟dom（提升性能）
7. 比较原始虚拟dom和新的虚拟dom的区别(提升性能)
8. 直接操作dom，改变span中的内容

### 虚拟dom优点
1. 性能
2. 跨端应用

## 4-6-1

### Diff算法
1. setState是异步的，连续3次setState的间隔很小，可以同时执行
2. 同级比较，从最顶层比对，顶层有差异，替换下面全部
3. 虚拟dom根据key进行比对
4. 不要用index作为key值是因为第一个删除之后基本全部重新渲染了。
5.

## 4-7-1

### ref

不推荐用ref

this.ul.querySelectorAll('div').length

## 4-7-2

### ref
ref帮助我们直接获取react的dom元素
setState回调函数
