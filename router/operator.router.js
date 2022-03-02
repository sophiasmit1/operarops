const route = require('color-convert/route')
const {Router} = require ('express')
const { async } = require('rxjs')
const router = Router()
const Operator = require('../models/Operator')

router.post('/add', async (req, res) => {
    try {
        const {title,imgUrl } = req.body

        const operator = new Operator({
            title, imgUrl
        })

        await operator.save()
        res.json(operator)

    } catch (error) {
        console.log('2Првоерка' + error)
    }
})

router.get('/', async (req, res) => {
    try {
        const operators = await Operator.find()
        res.json(operators)
    } catch (error) {
        console.log('4 проверка' + error)
    }
})

router.get('/:id', async(req,res) =>{
    try {
        const { id } = req.params
        const operators = await Operator.findById(id)
        res.json(operators)
    } catch (error) {
        console.log(error)
    }
})

router.post('/remove', async (req, res) => {
    try {
        const { operatorsId } = req.body
        const operator = await Operator.findByIdAndDelete(operatorsId)
        res.json({operator, massage:'Success'})
    } catch (error) {
        console.log('1'+error)
    }
})


module.exports = router