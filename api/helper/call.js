import { randomId } from '../helper/utils'

const axios = require('axios')
const cookie = require('cookie')

const errorObj = {
    success: false,
    status: false,
    message: 'API Not Found or Timeout',
    data: {},
}

const generateHeader = (req) => {
    let ID = req.sesion ? req.session.access || req.session.uniqueId : ''
    if (!ID) {
        ID = randomId(4)
        req.session.uniqueId = Date.now().toString() + ID
    }

    // console.log(req.headers)
    const cookies = cookie.parse(req.headers.cookie || '')

    const headers = {
        // 'Accept-Language': cookies['i18n_redirected'] || 'tw'
    }

    if (req.session.access) {
        headers.Authorization = `Bearer ${req.session.access}`
    }

    // console.log(cookies['i18n_redirected'])
    return headers
}

const generateDebug = (response) => {
    if (process.env.APPLICATION_ENV != 'production' && response && response.config) {
        const c = response.config
        return {
            method: c.method,
            url: c.url,
            headers: c.headers,
            params: c.params,
            data: c.data,
        }
    }
    return {}
}

const _get = (path, req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await axios.get(process.env.API_DOMAIN + path, {
                headers: generateHeader(req),
            })
            if (r.data?.code == 200) {
                r.data = {
                    data: r.data,
                    success: true,
                }
            } else {
                r.data = {
                    message: r.data?.message,
                    success: false,
                    code: r.data?.code,
                }
            }
            resolve(r.data)
        } catch (err) {
            // console.log("🚀 ~ file: call.js:74 ~ returnnewPromise ~ err:", err);
            if (err.response?.data) {
                err.response.data.fe_debug = generateDebug(err.response)
                resolve(err.response.data)
            } else {
                resolve(errorObj)
            }
        }
    })
}

const _post = (path, req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await axios.post(process.env.API_DOMAIN + path, req.body, {
                headers: generateHeader(req),
            })
            console.log(r.data)
            if (r.data?.code === 200) {
                r.data = {
                    data: r.data,
                    success: true,
                }
            } else if (r.data?.code === 429) {
                r.data = {
                    message: 'operation_too_frequent',
                    success: false,
                    code: r.data?.code,
                }
            } else {
                r.data = {
                    message: r.data?.message,
                    success: false,
                    code: r.data?.code,
                }
            }
            resolve(r.data)
        } catch (err) {
            console.log(err)
            resolve(err)
        }
    })
}

const _put = (path, req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await axios.put(process.env.API_DOMAIN + path, req.body, {
                headers: generateHeader(req),
            })
            r.data = {
                data: r.data,
                success: true,
            }
            resolve(r.data)
        } catch (err) {
            resolve(err)
        }
    })
}

const _patch = (path, req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await axios.patch(process.env.API_DOMAIN + path, req.body, {
                headers: generateHeader(req),
            })
            r.data = {
                data: r.data,
            }
            r.success = true
            resolve(r.data)
        } catch (err) {
            err.response.data.fe_debug = generateDebug(err.response)
            if (err.response?.data) {
                resolve(err.response.data)
            } else {
                resolve(errorObj)
            }
        }
    })
}

const _delete = (path, req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await axios.delete(process.env.API_DOMAIN + path, req.body, {
                headers: generateHeader(req),
            })
            r.data = {
                data: r.data,
            }
            r.success = true
            resolve(r.data)
        } catch (err) {
            if (err.response?.data) {
                err.response.data.fe_debug = generateDebug(err.response)
                resolve(err.response.data)
            } else {
                resolve(errorObj)
            }
        }
    })
}

export { _delete, _get, _patch, _post, _put }
