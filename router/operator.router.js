const route = require('color-convert/route')
const {Router} = require ('express')
const { async } = require('rxjs')
const router = Router()
const Operator = require('../models/Operator')

router.post('/add', async (req, res) => {
    try {
        const {title} = req.body

        const operator = new Operator({
            title
        })

        await operator.save()
        res.json(operator)

    } catch (error) {
        console.log('2Првоерка' + error)
    }
})


module.exports = router