const express = require('express');
const router = express.Router();

const sections ={
    "1": {
        'name': 'Variables have to be declared with either "const" or "let". Like most languages, "let" variables allow you to re-assign a value',
        'startingCode': 'let var1 = "foo" \n' +
            '\n' +
            '\n' +
            'var1 = "bar"\n' +
            '\n' +
            'console.log("var1 should equal bar: " + var1)',
        'text': ''
    },
    "2": {
        'name': 'const variables are immutable and do not allow you to change the value. Running the code should throw an error',
        'startingCode': 'const var1 = "foo" \n' +
            '\n' +
            '\n' +
            'var1 = "bar"\n' +
            '\n' +
            'console.log("var1 should equal bar: " + var1)',
        'text': ''
    }
}
router.get('/', (req, res, next) => {
    const getId = req.query.id
    res.send(JSON.stringify(sections[getId]))
})

module.exports = router;