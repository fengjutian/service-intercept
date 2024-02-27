
const express = require('express');
const { Log } = require('./db/model');
const { logger } = require('./log')

const app = express();

app.get('/log',async(req,res) => {
    console.log(111, req.params)

    logger.info('Info message');
    logger.error('Error message');
    logger.warn('Warning message');


    // const log = new Log({
    //   time: '2024-02-26 17:24:00',
    //   msg: 'Hello World'
    // })

    // log.save();

    // console.log('list', list)
})

app.post('/log',(req,res) => {
  res.send(req.query);
})

app.listen(7000);
console.log('网站服务器启动成功');