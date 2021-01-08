// Express
const express = require('express')
const router = express.Router()

// Log in
router.post('/', (req, res) => {
    if (req.body.username === 'demo' && req.body.password === 'demo') {
        req.session.authUser = { username: 'demo' }
        return res.json({ username: 'demo' })
    }
    res.status(401).json({ error: 'Bad credentials' })
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
