import { _get, _post } from '../helper/call'

const routes = {
    login(req) {
        return new Promise(async (resolve, reject) => {
            const r = await _post('api/userLogin', req)
            if (r.data?.code === 200) {
                req.session.access = r.data.access_token
                // req.session.refresh = r.data.refresh;
                req.session.user = {
                    isLogin: true,
                    ...r.data?.user,
                }

                delete r.data.access_token

                r.data.user = {
                    isLogin: true,
                    ...r.data?.user,
                }

                // delete r.data.refresh;
            }
            resolve(r)
        })
    },
    regUser(req) {
        return _post('api/userRegister', req)
    },
    logout(req) {
        return new Promise(async (resolve, reject) => {
            const r = await _post('api/logout', req)
            console.log(r)
            if (r.data?.code === 200) {
                req.session = null // destroy session no matter failed or success
                resolve(r)
            } else {
                req.session = null // destroy session no matter failed or success
                resolve(r)
            }
        })
    },
    session(req) {
        return new Promise((resolve, reject) => {
            if (req.session?.user) {
                resolve({
                    status: true,
                    data: req.session.user,
                })
            } else {
                resolve({
                    status: false,
                    data: {},
                })
            }
        })
    },
    user_deposit(req) {
        return _post('api/userDeposit', req)
    },
    withdrawal(req) {
        return _post('api/withdrawal', req)
    },
    get_category(req) {
        const u = new URLSearchParams(req.body).toString()

        return _get('api/pcategorylist?' + u, req)
    },
    get_category_name(req) {
        return _get('api/categoryname', req)
    },
    displayProductsByCategory(req) {
        return _post('api/displayProductsByCategory', req)
    },
    get_contact_list(req, body) {
        return _get('api/contact', req)
    },
    getProductDetail(req) {
        return _post('api/product/detail', req)
    },
    grabOrder(req) {
        return _post('api/requestProduct', req)
    },
    purchaseOrder(req) {
        return _post('api/userPurchase', req)
    },
    get_account_detail(req, body) {
        return _get('api/user/account/detail', req)
    },
    get_member_rank_list_and_member_rank(req, body) {
        return _get('api/member/rank/list', req)
    },
    get_member_current_freeze_balance(req, body) {
        return _get('api/member/withdraw/page', req)
    },
    get_withdraw_record(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/member/withdraw/history?' + u, req)
    },
    get_deposit_record(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/member/deposit/history?' + u, req)
    },
    get_earn_record(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/member/earn/record?' + u, req)
    },
    get_downline_commission(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/upline/record?' + u, req)
    },
    getBanner(req, body) {
        return _get('api/banner', req)
    },
    member_profile_page(req, body) {
        return _get('api/member/profile/page', req)
    },
    member_complete_product(req, body) {
        return _get('api/member/complete/product', req)
    },
    access_page_data(req, body) {
        return _get('api/member/access', req)
    },
    pending_product(req, body) {
        return _get('api/pending/product', req)
    },
    change_password(req, body) {
        return _post('api/user/change/password', req)
    },
    change_sec_password(req, body) {
        return _post('api/user/change/secpassword', req)
    },
    forget_password(req, body) {
        return _post('api/forgotpassword', req)
    },
    pool_list(req, body) {
        return _get('api/pool/list', req)
    },
    pool_duration_list(req, body) {
        return _post('api/pool/duration/list', req)
    },
    purchase_pool(req, body) {
        return _post('api/pool/purchase', req)
    },
    pool_topup(req, body) {
        return _post('api/pool/topUp', req)
    },
    pool_withdraw(req, body) {
        return _post('api/pool/withdrawal', req)
    },
    pool_withdraw_history(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/pool/withdraw/history?' + u, req)
    },
    pool_deposit_history(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/pool/deposit/history?' + u, req)
    },
    pool_purchase_history(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/pool/purchase/history?' + u, req)
    },
    pool_reward_history(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/pool/reward/history?' + u, req)
    },
    user_pool_detail(req, body) {
        const u = new URLSearchParams(req.body).toString()
        return _get('api/user/pool/detail?' + u, req)
    },
    get_operate_time(req, body) {
        return _get('api/operate/time', req)
    },
}

module.exports = routes
