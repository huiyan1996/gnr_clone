const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')
const routes = require('./routes/routes')

const app = express({ limit: '50mb' })

const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(express.json())

app.set('trust proxy', 1) // trust first proxy
app.use(
    cookieSession({
        name: 'session',
        keys: [process.env.SESSION_SECRET],
        maxAge: 24 * 60 * 60 * 1000,
    }),
)
app.get('/test', function (req, res) {
    res.send({
        test: 'Test successful',
    })
})

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})

app.get('/test/sess', (req, res) => {
    res.json({
        sess: !!req.session,
        status: true,
        user: req.session.user,
        access: req.session.access,
        refresh: req.session.refresh,
    })
})

app.post('/:action', cors(), async (req, res) => {
    // console.log(req.params.action)

    const reqData = req.body
    try {
        const r = await routes[req.params.action](req, reqData)
        res.json(r)
    } catch (err) {
        res.json(err)
    }
})

export default {
    path: '/api',
    handler: app,
}
