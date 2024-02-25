<template>
    <!-- Default -->
    <div class="grid-container">
        <TopBar />

        <div class="pageContent centerWrapper-default">
            <Nuxt :key="refreshKey" />
        </div>

        <Footer />
    </div>
</template>

<script>
export default {
    name: 'Default',
    layout: 'App',
    data() {
        return {
            showSidebar: true,
            showLogout: true,
            refreshKey: 0,
        }
    },
    watch: {
        '$store.state.sidebarStatus'(val) {
            this.showSidebar = val
        },
        '$i18n.locale'(val) {
            // console.log(val)
            this.refreshKey++
        },
    },
    beforeMount() {
        // if (localStorage.getItem('cate')) {
        //     this.$store.commit('setCategoryList', JSON.parse(localStorage.getItem('cate')))
        // }
    },
    // page component definitions
}
</script>
