const express = require('express');
const router = express.Router();
const {NodeVM} = require('vm2');

router.post('/', function(req, res, next) {
    const vm = new NodeVM({
        console: 'redirect',
        require: {
            external: true
        }
    });

    vm.on('console.log', (data) => {
        res.send(data.toString())
    });
    vm.on('console.info', (data) => {
        console.log(data)
        res.send(data.toString())
    })
    vm.on('console.warn', (data) => {
        console.log(data)
        res.send(data.toString())
    })

    vm.on('console.error', (data) => {
        console.log(data)
        res.send(data.toString())
    })

    vm.on('console.info', (data) => {
        console.log(data)
        res.send(data.toString())
    })

    vm.on('console.dir', (data) => {
        console.log(data)
        res.send(data.toString())
    })

    vm.on('console.trace', (data) => {
        console.log(data)
        res.send(data.toString())
    })

    const code = req.body.data
    try{
        vm.run(`${code}`)}
    catch (err){
        res.send(err.toString())
    }


})


module.exports = router;