/* setup */
const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const cors = require('cors')

app.set('trust proxy', 1) // trust first proxy
app.use(
    cookieSession({
        name: 'session',
        keys: [process.env.SESSION_SECRET],
    }),
)

// create a whitelist for accepting request
// let domains = ['mtins.xyz', 'martinsurance.com']
// const protocols = ['http', 'https']
// const subdomains = ['', 'member.', 'admin.', 'login.', 'bo3223.']
// let whitelist = []

// if (process.env.APPLICATION_ENV == 'development') {
//     domains.push(`localhost:3000`)
// }

// for (let d in domains) {
//     for (let p in protocols) {
//         for (let s in subdomains) {
// 			whitelist.push(`${protocols[p]}://${subdomains[s]}${domains[d]}`)
//         }
//     }
// }

const corsOptions = {
    origin: function (origin, callback) {
        // if (whitelist.indexOf(origin) !== -1 || !origin) {

        // 	callback(null, true)
        // } else {
        // 	callback(new Error('Not allowed by CORS'))
        // }
        callback(null, true)
    },
}

app.use(express.json()) // make request params from front-end available at req.body
app.options('*', cors(corsOptions))

/* routing */
app.get('/api/test', cors(corsOptions), (req, res) => {
    res.json({
        status: true,
    })
})

app.get('/api/test/sess', cors(corsOptions), (req, res) => {
    res.json({
        sess: !!req.session,
        status: true,
        user: req.session.user,
        access_token: req.session.access_token,
        token_type: req.session.token_type,
    })
})

const errorObj = {
    success: false,
    status: false,
    message: 'API Not Found or Timeout',
    data: {},
}

const routes = require('./routes/routes')
// app.use('/:scope/:action', cors(corsOptions), async (req, res) => {
//     if (req.method != 'POST') {
//         res.json(errorObj)
//         return
//     }

//     let reqData = req.body
//     if (process.env.APPLICATION_ENV == 'production') {
//         reqData.debug = true
//     }

//     if (typeof routes[req.params.scope][req.params.action] == 'function') {
//         try {
//             const r = await routes[req.params.scope][req.params.action](req, reqData)
//             res.json(r)
//         }
//         catch(err) {
//             res.json(errorObj)
//         }
//     }
//     else {
//         res.json(errorObj)
//     }
// });

app.use('/api/:action', cors(), async (req, res) => {
    if (req.method != 'POST') {
        res.json(errorObj)
        return
    }

    const reqData = req.body
    if (process.env.APPLICATION_ENV == 'production') {
        reqData.debug = true
    }

    if (typeof routes[req.params.action] === 'function') {
        try {
            const r = await routes[req.params.action](req, reqData)
            res.json(r)
        } catch (err) {
            res.json(errorObj)
        }
    } else {
        res.json(errorObj)
    }
})

module.exports = app
