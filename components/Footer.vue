<!-- Please remove this file from your project -->
<template>
    <div>
        <div class="footer">
            <div class="centerWrapper">
                <div class="col-12">
                </div>
                <div class="col-12 text-center text-s mt-3 pt-4 border-top-grey">
                    &copy; {{ date }} {{ $t('onthelist') }}
                </div>
            </div>
        </div>

        <Modal :show="csModal">
            <div>
                <div class="d-flex align-items-center p-3 border-bottom">
                    <div class="flex-grow-1 mainFontBold text-l">
                        {{ $t('welcome_to_watch_box') }}
                    </div>
                    <div>
                        <b-icon icon="x-lg" class="cursor-pointer" @click="csModal = false"></b-icon>
                    </div>
                </div>
                <div class="p-3">
                    <div class="mainFontBold text-l">
                        {{ $t('how_can_we_help') }}
                    </div>
                    <div class="my-3">
                        {{ $t('ready_to_talk1') }}
                    </div>
                    <div class="my-3">
                        {{ $t('ready_to_talk2') }}
                    </div>
                    <div class="my-3">
                        {{ $t('ready_to_talk3') }}
                    </div>

                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-signal"></i>
                        <span class="ml-3">{{ $t('call') }}</span
                        >:
                        <span class="ml-2"
                            ><a class="color-primary" :href="signalLink">{{ $t('chat_with_us') }}</a></span
                        >
                    </div>

                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-whatsapp"></i>
                        <span class="ml-3">{{ $t('whatsapp') }}</span
                        >:
                        <span class="ml-2"
                            ><a class="color-primary" :href="whatsappLink" target="_blank">{{
                                $t('chat_with_us')
                            }}</a></span
                        >
                    </div>

                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-envelope"></i>
                        <span class="ml-3"
                            ><a class="color-primary" :href="'mailto:' + email">{{
                                $t('email_customer_support')
                            }}</a></span
                        >
                        <!-- :
            <span class="ml-2">{{ email }}</span> -->
                    </div>
                </div>
            </div>
        </Modal>

        <a href="javascript:;" class="csBtn" @click="csModal = !csModal">
            <i class="bi bi-headset"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'FooTer',
    data() {
        return {
            show: false,
            date: '',
            csModal: false,
            signalLink: '',
            whatsappLink: '',
            email: '',
        }
    },
    mounted() {},
    beforeMount() {
        this.date = new Date().getFullYear()
        this.getContactList()
    },
    methods: {
        async getContactList() {
            const d = await this.$api('get_contact_list', {})
            this.signalLink = d.data?.data[0].value
            this.email = d.data?.data[1].value
            this.whatsappLink = d.data?.data[2].value
        },
    },
}
</script>
