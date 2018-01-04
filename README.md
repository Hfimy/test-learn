# test-learn
[![Build Status](https://travis-ci.org/Hfimy/test-learn.svg?branch=master)](https://travis-ci.org/Hfimy/test-learn)
[![codecov](https://codecov.io/gh/Hfimy/test-learn/branch/master/graph/badge.svg)](https://codecov.io/gh/Hfimy/test-learn)
#### BDD：Behance Driven Development  行为驱动开发<br>
#### TDD：Test Driven Development 测试驱动开发

#### chai、mocha、istanbul、CI

chai：断言库<br>
mocha：测试框架<br>
istanbul：代码覆盖率工具<br>
CI：continuous integration，持续集成，频繁地将代码集成到主干，可以尽早发现错误、防止分支大幅偏离主干
<br>
### 流程
#### 1. 添加测试用例，chai+mocha
#### 2. 添加代码覆盖率工具，istanbul
#### 3. 添加持续集成
* 在`https://travis-ci.org`添加仓库
* 编写.travis.yml配置文件
* 在README.md里添加`build`图标
#### 4. 添加`codecov`
* 在`https://codecov.io`添加仓库
* 更新.travis.yml配置文件
* 在README.md里添加`codecov`图标

#### 5. benchmark
`https://benchmarkjs.com/` - 基准的代码性能测试与比较，去掉了各种额外因素对代码的影响<br>
`https://jsperf.com/` - 生成一个链接，可在各种环境下进行测试