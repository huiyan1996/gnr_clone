<!-- Please remove this file from your project -->
<template>
    <div class="d-inline-block langSelect">
        <span @click="show = !show">
            <span class="text-uppercase circle">{{ defLang }}</span>
            <b-icon icon="chevron-down" size="xs" class="ml-1 onlyPc" />
        </span>
        <div v-if="show" class="selectDropdown">
            <div
                v-for="(v, k) in $store.$i18n.locales"
                :key="'lang' + k"
                class="dropdownItem"
                @click="changeLang(v.code)"
            >
                {{ v.display }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LangSelect',
    data() {
        return {
            show: false,
            defLang: 'en',
        }
    },
    beforeMount() {
        this.defLang = this.$i18n.locale
    },
    methods: {
        changeLang(code) {
            this.$i18n.setLocale(code)
            this.$i18n.setLocaleCookie(code)
            this.show = false
            this.defLang = code
        },
    },
}
</script>
