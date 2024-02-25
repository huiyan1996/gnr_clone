export const state = () => ({
    sidebarStatus: true,
    sideBarAction: '' // track if user has manually open or close sidebar
})

export const mutations = {
    triggerSidebar(state) {
        state.sidebarStatus = !state.sidebarStatus
    }
}

export const actions = {
}