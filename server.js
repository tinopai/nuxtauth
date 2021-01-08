// Nuxt
const { loadNuxt, build } = require('nuxt')

// Express
const express = require('express')
const app = express()

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    // Session
    const session = require('express-session')
    app.use(
        session({
            secret: 'change this',
            resave: false,
            saveUninitialized: true,
        })
    )

    const bodyParser = require('body-parser')
    app.use(bodyParser.json())

    const auth = require('./serverComponents/auth')
    app.use('/auth', auth)

    // Render every route with Nuxt.js
    app.use(nuxt.render)

    // Build only in dev mode with hot-reloading
    if (isDev) build(nuxt)

    // Listen the server
    app.listen(port, '0.0.0.0')
    // eslint-disable-next-line no-console
    console.log('Server listening on `localhost:' + port + '`.')
}

start()
