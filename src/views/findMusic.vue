<template>
    <div style="width: 100%">
        <Carousel autoplay v-model="value2" loop :autoplay-speed="autoplaySpeed">
            <CarouselItem v-for="pic in pics" :key="pic.url">
                <div class="slide-bgc" :style="{background:pic.bgColor}">
                    <div class="slide">
                        <img :src="pic.url">
                    </div>
                </div>
            </CarouselItem>
        </Carousel>
        <div class="content">
            <div class="hot-body">
                <div class="hot-box-nav">
                    <a class="title">热门推荐</a>
                    <div class="hot-box-tab">
                        <router-link to="/findMusic/classification">
                            <a>华语</a>
                        </router-link>
                        <span class="line">|</span>
                        <router-link to="/findMusic/classification">
                            <a>流行</a>
                        </router-link>
                        <span class="line">|</span>
                        <router-link to="/findMusic/classification">
                            <a>摇滚</a>
                        </router-link>
                        <span class="line">|</span>
                        <router-link to="/findMusic/classification">
                            <a>民谣</a>
                        </router-link>
                        <span class="line">|</span>
                        <router-link to="/findMusic/classification">
                            <a>电子</a>
                        </router-link>
                    </div>
                    <span class="more">
                        <a>更多</a>
                    </span>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value2: 0,
                autoplaySpeed: 5000,
                pics: [
                    {
                        url: 'http://p1.music.126.net/brNV3vdLy4lFNgSUHkm3dg==/109951163196866546.jpg',
                        bgColor: '#255652'
                    },
                    {
                        url: 'http://p1.music.126.net/U1i9oTLmP4zHEoaZf2jIqA==/109951163196860301.jpg',
                        bgColor: '#333f33'
                    },
                    {
                        url: 'http://p1.music.126.net/LoiqlF6FuZM8d0NHfjqk7g==/109951163196861649.jpg',
                        bgColor: '#38dd99'
                    }
                ]
            }
        },
    }
</script>
<style>
    a {
        color: #242424 !important;
        text-decoration: none;
    }

    .slide {
        position: relative;
        left: 22%;
    }

    .content {
        width: 980px;
        min-height: 700px;
        border: 1px solid #d3d3d3;
        margin-left: 200px;
    }

    .hot-body {
        padding: 20px 20px 40px;
    }

    .hot-box-nav {
        height: 33px;
        padding: 0 10px 0 34px;
        background-position: -225px -156px;
        border-bottom: 2px solid #C10D0C;
    }

    .title {
        float: left;
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
    }

    .hot-box-tab {
        float: left;
        margin: 7px 0 0 20px;
    }

    .line {
        margin: 0 10px;
        color: #ccc;
    }

    .more {
        margin-top: 9px;
        float: right;
    }


</style>
