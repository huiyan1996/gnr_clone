<template>
    <div class="topbarWrapper">
        <div class="topbarBlock">
            <a class="topbarIcon" href="/"></a>
            <nav class="topbarNav">
                <div class="topbarNavItem">
                    <div>
                        <a class="topbarNavItemStyle" href="/">Home</a>
                    </div>
                </div>
                <div class="topbarNavItem">
                    <div>
                        <div class="topbarNavItemStyle">
                            Games
                            <div class="topbarNavDropdownBlock">
                                <div class="dropdownIcon1"></div>
                                <div class="dropdownIcon2"></div>
                            </div>
                        </div>

                        <div class="dropdownBlock">
                            Mobile Games
                            <div class="dropdownRow">
                                <div class="dropdownItems"><img src="~/assets/img/game_codm.jpg" alt=""></div>
                                <div class="dropdownItems"><img src="~/assets/img/game_aov.jpg" alt=""></div>
                                <div class="dropdownItems"><img src="~/assets/img/game_ud.jpg" alt=""></div>
                                <div class="dropdownItems"><img src="~/assets/img/game_bcm.jpg" alt=""></div>
                            </div>
                            <div class="dropdownRow">
                                <div class="dropdownItems"><img src="~/assets/img/game_ff.jpg" alt=""></div>
                                <div class="dropdownItems"><img src="~/assets/img/game_speed.jpg" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="topbarNavItem">
                    <div>
                        <div class="topbarNavItemStyle">
                            Platforms
                            <div class="topbarNavDropdownBlock">
                                <div class="dropdownIcon1"></div>
                                <div class="dropdownIcon2"></div>
                            </div>
                        </div>

                        <div class="dropdownBlock text-center">
                            <a class="gpcLink" href="#">
                                <img src="~/assets/img/gpc.png" alt="">
                                <div class="text-l mt-2 mainFontBold">Garena PC</div>
                                <div class="color-lightgrey text-m">Windows</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="topbarNavItem">
                    <div>
                        <a href="//sg.support.garena.com/" target="_blank" class="topbarNavItemStyle" rel="noopener noreferrer">Support</a>
                    </div>
                </div>
                <div class="topbarNavItem">
                    <div>
                        <a href="//account.garena.com/?locale_name=SG" target="_blank" class="topbarNavItemStyle" rel="noopener noreferrer">Account</a>
                    </div>
                </div>
                <div class="topbarNavItem">
                    <div>
                        <a href="//careers.garena.com" target="_blank" class="topbarNavItemStyle" rel="noopener noreferrer">Career</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    data() {
        return {
            promptLogout: false,
            path: '/',
            // goTo: '/',
        }
    },
    computed: {
    },
    watch: {
    },
    mounted() {},
    methods: {
    },
}
</script>
