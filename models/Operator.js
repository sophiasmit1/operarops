const {Schema, model} = require ('mongoose')

const schema = new Schema({
    title: {type: String, require: true},
    imgUrl: {type: String, require: true}
})


module.exports = model('Operator', schema)