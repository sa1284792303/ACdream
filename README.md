# ACdream Online Judge v1.1.4

## 如何快速搭建(ubuntu下测试通过)

### 安装依赖
```
$ sudo apt-get update
$ sudo apt-get install imagemagick
$ sudo apt-get install python-software-properties python g++ make
$ sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential
```
### 安装node.js
```
$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
```

### 安装mongodb数据库
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

### 数据库初始化
```
$ cd ACdream
$ mongorestore -h localhost -d acdream_db --directoryperdb acdream_db -drop
```

### 安装依赖模块
```
$ cd ACdream
$ sudo npm i
```

### 运行app
```
$ cd ACdream
$ node app.js
```
