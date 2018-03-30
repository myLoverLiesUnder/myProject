<template>
    <div class="g-btmbar">
        <div class="m-playbar">
            <div class="bg">
                <div class="wrap">
                    <div class="btns">
                        <a class="prv" title="上一首(ctrl+←)">上一首</a>
                        <a class="ply" v-show="!isPlaying" title="播放/暂停(p)" @click="play">播放/暂停</a>
                        <a class="stop" v-show="isPlaying" title="播放/暂停(p)" @click="stop">播放/暂停</a>
                        <a class="nxt" title="下一首(ctrl+→)">下一首</a>
                    </div>
                    <div class="cover">
                        <img src="http://p1.music.126.net/SqGa0wsmVt5Ny4pNHWirtA==/18257390579780610.jpg?param=34y34"/>
                    </div>
                    <div class="words">
                        <audio id="audio"
                               src="http://m10.music.126.net/20180330172528/c5c3388ffd28889e744a16304eebdcdc/ymusic/1055/e931/f3ae/c540e42617d0766fe339ff3e8f3460b8.mp3"></audio>
                        <span>From a Buick 6</span>
                        <span style="margin-left: 15px;">Bob Dylan</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .g-btmbar {
        position: fixed;
        zoom: 1;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0;
        width: 100%;
        z-index: 1002;
    }

    .m-playbar {
        position: absolute;
        zoom: 1;
        top: -53px;
        left: 0;
        width: 100%;
        height: 53px;
        margin: 0 auto;
    }

    .m-playbar .bg {
        height: 53px;
        zoom: 1;
        background-position: 0 0;
        background-repeat: repeat-x;
        background: url("http://s2.music.126.net/style/web2/img/frame/playbar.png?7ebeddffc8f16980432625e6c668c450");
    }

    .m-playbar .wrap {
        position: absolute;
        left: 50%;
        top: 6px;
        z-index: 15;
        width: 980px;
        height: 47px;
        margin: 0 auto;
        margin-left: -490px;
    }

    .m-playbar .btns {
        width: 137px;
        padding: 6px 0 0 0;
        float: left;
    }

    .m-playbar .btns a {
        display: block;
        float: left;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 5px;
        text-indent: -9999px;
        background: url("http://s2.music.126.net/style/web2/img/frame/playbar.png?7ebeddffc8f16980432625e6c668c450");
    }

    .m-playbar .btns .prv {
        background-position: 0 -130px
    }

    .m-playbar .btns .ply {
        background-position: 0 -204px;
        width: 36px;
        height: 36px;
        margin-top: 0;
    }

    .m-playbar .btns .nxt {
        background-position: -80px -130px;
    }

    .m-playbar .btns .stop {
        background-position: -40px -165px;
        width: 36px;
        height: 36px;
        margin-top: 0;
    }

    .m-playbar .cover {
        float: left;
        position: relative;
        margin: 6px 15px 0 0;
    }

    .m-playbar .play {
        position: relative;
        width: 608px;
    }

    .m-playbar .words {
        height: 28px;
        overflow: hidden;
        color: #e8e8e8;
        text-shadow: 0 1px 0 #171717;
        line-height: 28px;
    }

</style>
<script>
    export default {
        data() {
            return {
                isPlaying: false
            };
        },
        methods: {
            play: function () {
                let self = this;
                let audio = document.querySelector('#audio');
                if (!self.isPlaying) {
                    audio.play();
                    self.isPlaying = true;
                }
            },
            stop: function () {
                let self = this;
                let audio = document.querySelector('#audio');
                if(this.isPlaying){
                    audio.pause();
                    audio.currentTime = 0;
                    self.isPlaying = false;
                }
            }
        }
    };
</script>