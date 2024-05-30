// You can export modules on different ways

// 1. From "items = ['item1', 'item2']" to:
module.exports.items = ['item1', 'item2'] // Direct export on variable

const person = {
    name: 'bob',
}

// 2. 
// but you can this one instead module.exports = person
module.exports.singlePerson = person // module.exports.[Property] = [object]