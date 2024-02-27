<template>
    <div class="bannerWrapper">
        <div class="bannerBlock">
            <Slider
            animation="fade"
            :duration="5000"
            :speed="3000"
            height="100%"
            >
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg1">
                            <div class="block">
                                <div class="position">
                                    <h2 class="title1">Garena Esports</h2>
                                    <h3 class="title2">Professional or amateur, we build stages for gamers to pursue<br>their passion for competitive gaming</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg2">
                            <div class="block">
                                <div class="position">
                                    <div class="title1">
                                        <span>Garena<br>Platforms</span>
                                    </div>
                                    <div class="title2">Install the ultimate gaming<br>platform on your PC or mobile</div>
                                    <div>
                                        <a class="linkBlock" href="/gpc">
                                            <div class="icon"></div>
                                            <div class="txt">Garena PC</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg3">
                            <div class="block">
                                <div class="position">
                                    <div class="titleImage"></div>
                                    <h3 class="title2">
                                        <div>Fast Paced 50-Man Battle Royale. </div>
                                        <div>Play it anytime and anywhere on your mobile</div>
                                    </h3>
                                    <a class="link" href="//ff.garena.com/" target="_blank" rel="noopener noreferrer">
                                        <div class="icon"></div>
                                        <div class="txt">Play Now</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg4">
                            <div class="block">
                                <div class="position">
                                    <div class="titleImage"></div>
                                    <h3 class="title2">
                                        <div>Asia's No.1 Mobile MOBA is out now! </div>
                                        <div>Enter the arena and become a true Conqueror!</div>
                                    </h3>
                                    <a class="link" href="//aov.garena.co.id/" target="_blank" rel="noopener noreferrer">
                                        <div class="icon"></div>
                                        <div class="txt">Play Now</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem MHPU6BuZEOSn3rLFrWvvfw==">
                        <div class="bg bg5">
                            <div class="block">
                                <div class="position">
                                    <div class="titleImage"></div>
                                    <h3 class="title2">
                                        <div>A realistic post-apocalyptic open world survival mobile game. </div>
                                        <div>Load Up and Explore The Unknown Open World!</div>
                                    </h3>
                                    <a class="link" href="//ud.garena.com/" target="_blank" rel="noopener noreferrer">
                                        <div class="icon"></div>
                                        <div class="txt">Play Now</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg6">
                            <div class="block">
                                <div class="position">
                                    <div class="titleImage"></div>
                                    <h3 class="title2">
                                        <div>Unleash your inner magic in an immersive magic adventure RPG!</div>
                                    </h3>
                                    <a class="link" href="//bcmna.onelink.me/sUnz/wqa76xo5" target="_blank" rel="noopener noreferrer">
                                        <div class="icon"></div>
                                        <div class="txt">Play Now</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg7">
                            <div class="block">
                                <div class="position">
                                    <div class="titleImage"></div>
                                    <h3 class="title2">
                                        <div>5v5 Team Deathmatch,100-man Battle Royale, Epic weapons and </div>
                                        <div>vehicles. We got it all. Stop waiting, Start shooting</div>
                                    </h3>
                                    <a class="link" href="//codm.garena.com/" target="_blank" rel="noopener noreferrer">
                                        <div class="icon"></div>
                                        <div class="txt">Play Now</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div class="bannerItem">
                        <div class="bg bg8">
                            <div class="block">
                                <div class="position">
                                    <div class="titleImage"></div>
                                    <h3 class="title2">
                                        <div>Drift your way to victory in 3 minutes with a variety of rides!</div>
                                    </h3>
                                    <a class="link" href="//speed.garena.com/" target="_blank" rel="noopener noreferrer">
                                        <div class="icon"></div>
                                        <div class="txt">Play Now</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderItem>
            </Slider>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            sliderIndex: 0,
            list: [
                { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
                { backgroundColor: '#eee', width: '100%', height: '100%' },
                { backgroundColor: '#f44336', width: '100%', height: '100%' },
            ],
            banners: [
                { backgroundClass: '', }
            ]
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
