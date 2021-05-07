// Express
const express = require('express')
const router = express.Router()

const mongo = require('./../utility/mongo.js').users
mongo.find({ username: 'tino' }).then((res) => {
    console.log(`[+] Response: `, res)
})

// Log in
router.post('/', async (req, res) => {
    const user = await mongo.findOne({ username: req.body.username })

    if (user?.password === req.body?.password) {
        delete user.password // Remove user.password so the hashed password doesnt show up on client
        req.session.authUser = user
        return res.json(user)
    }
    return res.json({ error: 'Bad credentials' })
})

// Sign up
router.post('/', (_, res) => {
    res.status(501).send(null)
})

// Destroy session
router.post('/destroy', (req, res) => {
    req.session.authUser = null
    return res.send(200).json({
        success: true,
    })
})

module.exports = router
