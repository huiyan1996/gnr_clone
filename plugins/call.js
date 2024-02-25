export default function ({ $config, $axios, store, redirect, req}, inject) {
    const errorObject = {
        status: false,
        data: {},
        message: 'API Not Found or Timeout.'
    }

    const api = async (path, payload) => {
        let base = `/api`;
        try {
            if (path[0] == '/') {
                path = path.substring(1)
            }
            let url = `${base}/${path}`

            if (!process.client) { // is server, we specify the domain
                url = req.protocol + "://" + req.headers.host  + url
            }
           
            const r = await $axios.post(url, payload)

            // session expired
            if (r.data.code == 'token_not_valid' && path != 'login' && process.client) {
                // log user out
                if (path != 'logout') {
                    const logout = await store.dispatch('user/logOut', true)
                }
                /* else {
                    redirect('/sign-up?exp=1')
                } */
            }

            return Promise.resolve(r.data)
        }
        catch(e) {
            return Promise.resolve(errorObject)
        }
    }

    inject('api', api)
};