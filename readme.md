# 单元测试

### 什么是单元测试

> 单元测试（unit testing），是指对软件中的最小可测试单元进行检查和验证。对于单元测试中单元的含义，一般来说，要根据实际情况去判定其具体含义，如C语言中单元指一个函数，Java里单元指一个类，图形化的软件中可以指一个窗口或一个菜单等。总的来说，单元就是人为规定的最小的被测功能模块。单元测试是在软件开发过程中要进行的最低级别的测试活动，软件的独立单元将在与程序的其他部分相隔离的情况下进行测试。

### 单元测试的使用场景
* 对于一些重要底层的公共方法
* 逻辑分支比较多，复杂的函数
* 时间紧迫，线上hotfix等情况
* 组件 
> 比起服务端，前端代码的不可控因素更多，更容易出现bug，完全进行测试覆盖需要话费的人力成本也更大。

### 单元测试的优缺点
* 减少人力成本，提高代码质量
* 提高代码测试覆盖度
* 需要额外编写测试脚本，需要增加额外的时机成本

### 单元测试测试框架
* mocha，jstest, jasmine...
[wiki](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)

[选择测试工具](https://www.jianshu.com/p/6726c0410650)
### 单元测试工具体系
* 测试框架 (mocha，jstest, jasmine...)
  
* 测试管理工具 (Selenium、WebDriver/Selenium 2、Mocha、JsTestDriver、HTML Runners和Karma) 组织和运行整个测试的工具,不用我们手动一个个跑测试
* 断言库 (should.js、expect.js、chai.js,...) (描述你的具体测试的API)

#### 断言库api样例
> should style: foo.should.be.a()
expect style: expect(foo).to.be.a()  // 近Jasmine风格
assert style: assert.equal(foo, 'bar')

* chai.js同时支持 should / expect / assert 三种风格的断言库

#### 测试框架：jasmine.js

[官网](https://jasmine.github.io/pages/getting_started.html)

[参考](https://www.cnblogs.com/zhcncn/p/4330112.html)

``` javascript
npm install -g jasmine
jasmine init
```
##### 核心概念
* suite
* spec
* Matchers
> 常用的Matchers有：
> toBe()：相当于===比较。
toNotBe()
toBeDefined()：检查变量或属性是否已声明且赋值。
toBeUndefined()
toBeNull()：是否是null。
toBeTruthy()：如果转换为布尔值，是否为true。
toBeFalsy()
toBeLessThan()：数值比较，小于。
toBeGreaterThan()：数值比较，大于。
toEqual()：相当于==，注意与toBe()的区别。
一个新建的Object不是（not to be）另一个新建的Object，但是它们是相等（to equal）的



#### 额外问题
* es6转码

### karma
####安装
```javascript
npm install karma --save-dev npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
```
#### karma-webpack
* 由于我们的被测试代码是用es6写的，所以还需要对源代码进行转译,使用karma-webpack插件编译并引入源代码
#### 初始化
```javascript
npx karma init
```





