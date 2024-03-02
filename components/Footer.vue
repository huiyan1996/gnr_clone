<!-- Please remove this file from your project -->
<template>
    <div>
        <div class="footerWrapper">
            <div class="footerBlock">
                <div class="footerLogo">
                    <dl class="icon">
                        <dt class="margin">
                            <a class="img" href="/"></a>
                        </dt>
                    </dl>
                    <div class="footerDesc">
                        <dl class="item">
                            <dt class="title">Company</dt>
                            <dd class="content">
                                <div class="link">
                                    <a href="//www.seagroup.com/aboutus" target="_blank" rel="noopener noreferrer">About Us</a>
                                </div>
                                <div class="link">
                                    <a href="//careers.garena.com" target="_blank" rel="noopener noreferrer">Career</a>
                                </div>
                            </dd>
                        </dl>
                        <dl class="item">
                            <dt class="title">Platforms</dt>
                            <dd class="content">
                                <div class="link">
                                    <a href="/gpc">Garena PC</a>
                                </div>
                            </dd>
                        </dl>
                        <dl class="item">
                            <dt class="title">Service</dt>
                            <dd class="content">
                                <div class="link">
                                    <a href="//sg.support.garena.com/" target="_blank" rel="noopener noreferrer">Support</a>
                                </div>
                                <div class="link">
                                    <a href="//account.garena.com/?locale_name=SG" target="_blank" rel="noopener noreferrer">Account</a>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="copyright">
                    <div class="txt">Copyright © Garena Online. Trademarks belong to their respective owners. All rights reserved.</div>
                    <div class="links">
                        <div class="block">
                            <a href="/terms" class="linkItem" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                            <a href="/privacy" class="linkItem" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            <a class="linkItem" href="/faq">For Parents FAQ</a>
                        </div>
                        <div class="dropdown">
                            <!-- <div class="width">
                                <div class="r8O496+y9+ETu14x2rUc3Q==">
                                    <div class="JMB4Xf64Mc4S3SWW0Hj0VA==">
                                        <div class="-NuirelmrS+wnStmJ6JyNA==">
                                            <div class="C-yz4PkonPc7lqX7SWFlbA==">Singapore</div>
                                        </div>
                                    </div>
                                    <div class="TCu2Sg6bXVxbegKpzjsNrQ==">
                                        <div class="cPIkfg3-tEa3Cx-BpEEo0w=="></div>
                                    </div>
                                    <div class="TxZLSRgnhj7VRBLdMaj2eA== egrB0tOhtMyj5O1KNEzdHQ==">
                                        <button type="button" class="d7MnRoycX5ZaNB66HilMUA== _9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Singapore</div>
                                            </div>
                                        </button>
                                        <button type="button" class="_9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Indonesia</div>
                                            </div>
                                        </button>
                                        <button type="button" class="_9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Malaysia</div>
                                            </div>
                                        </button>
                                        <button type="button" class="_9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Philippines</div>
                                            </div>
                                        </button>
                                        <button type="button" class="_9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Taiwan</div>
                                            </div>
                                        </button>
                                        <button type="button" class="_9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Thailand</div>
                                            </div>
                                        </button>
                                        <button type="button" class="_9RAuDtkY5H3MhAzxGVcNkQ==">
                                            <div class="-NuirelmrS+wnStmJ6JyNA==">
                                                <div class="C-yz4PkonPc7lqX7SWFlbA==">Vietnam</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div> -->

                            <LangSelect />
                        </div>
                    </div>
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
