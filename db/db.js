const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'log'

// 连接数据库
mongoose.connect(`${url}/${dbName}`);

// 获取当前的连接对象
const conn = mongoose.connection;

// 监听错误
conn.on('error', err => {
    console.error('mongoose连接出错', err)
})

module.exports = mongoose;
