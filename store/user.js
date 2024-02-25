export const state = () => ({
	data: {},
	loggedIn: false,
})

export const getters = {
	profilePic: (state) => (config) => {
		if (state.data.profile_image_url) {
			return { backgroundImage: `url('${state.data.profile_image_url}')` }
		}
		return { backgroundImage: `url('${config.STATIC_ROOT}img/empty_profile_pic.svg')` }
	}
}

export const actions = {
	async fetch({ rootState, commit }) {
		const d = await this.$api('session', {})
		// console.log(d)

		if (d.status) {
			await commit('setUser', {
				data: d.data,
				status: true
			})
		}
		else {
			commit('resetUser')
		}
		
		return d
	},
	async login({ rootState, commit }, data) {
		const d = await this.$api('login', data)

		if (d.success) {
			commit('setUser', { data: d, status: true })
		}

		return d
	},
	async logOut({ rootState, commit }, exp) {
		const d = await this.$api('logout', {})
		commit('resetUser')

		if (exp) {
			this.$router.push('/?exp=1')
		}
		else {
			this.$router.push('/')
		}
		return Promise.resolve()
	},
	update({ commit }, data) {
		commit('updateField', data)
	}
}

export const mutations = {
	setUser(state, userData) {
		if (userData.data) {
			if(userData.data.data) {
				state.data = userData.data?.data
			}else{
				state.data = {
					user: userData.data
				}
			}
		}
		
		if (userData.status != undefined) {
			state.loggedIn = userData.status
		}
	},
	resetUser(state) {
		state.data = {}
		state.loggedIn = false
	},
	updateField(state, fieldData) {
		Object.assign(state.data, fieldData)
	}
}