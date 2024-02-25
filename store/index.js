export const strict = true

export const state = () => ({
  pageName: "", // used by topbar to display current page
  sidebarStatus: false,
  cateList: null
});

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    // console.log('req.session')
    // console.log(req.session)

    if (req.session?.user) {
      commit("user/setUser", { data: req.session.user, status: true });
    } else {
      try {
        await dispatch("user/fetch");
      } catch(err) {
        console.log(err)
      }
    }
  },
  async changeLang({}, code) {
    if (this.$i18n.getLocaleCookie() != code) {
      await this.$i18n.setLocale(code);
    }
  },
};

export const mutations = {
  setPageName(state, name) {
    state.pageName = name;
  },
  triggerSidebar(state) {
    state.sidebarStatus = !state.sidebarStatus;
  },
  setCategoryList(state, list) {
    state.cateList = list

    // localStorage.setItem('cate', JSON.stringify(list))
  },
};