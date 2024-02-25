<template>
    <b-modal
        v-model="showModal"
        :size="size"
        centered
        hide-header
        hide-footer
        :no-close-on-backdrop="closeBd ? false : true"
        :modal-class="{ noBg: isNoBg }"
    >
        <slot></slot>
    </b-modal>
</template>

<script>
export default {
    name: 'MoDal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'lg',
        },
        closeBd: {
            type: Boolean,
            default: false,
        },
        isNoBg: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showModal: this.show,
        }
    },
    watch: {
        show(val) {
            this.showModal = val
        },
    },
}
</script>
