<template>
    <div>
        <div class="background">
            <div class="c-content">
                <div style="height: 215px">
                    <div class="cover">
                        <img :src="coverSrc"/>
                        <span class="msk"></span>
                    </div>
                    <div class="cnt">
                        <div class="cntc">
                            <div class="cnt-header">
                                <div class="cnt-title">
                                    <h2>{{title}}</h2>
                                </div>
                            </div>
                            <div class="cnt-user">
                                <a class="face">
                                    <img :src="model.icon"/>
                                </a>
                                <span class="name">
                                    {{model.auther}}
                                </span>
                            </div>
                            <p class="cnt-introduction">
                                <b>介绍：</b>{{model.introduction}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="cnt-song" style="margin-top: 27px">
                    <div class="list-title">
                        <h3><span>歌曲列表</span></h3>
                        <span class="sub">{{musicListLength}}首歌</span>
                    </div>
                    <Table :columns="musicColumns" :data="model.musicList"></Table>
                </div>
                <div class="cnt-comment" style="margin-top: 40px">
                    <div class="list-title">
                        <h3><span>评论</span></h3>
                        <span class="sub">共{{commentLength}}条评论</span>
                    </div>
                    <div class="cmt-area" style="margin-top: 20px">
                        <div class="input-area" style="margin-bottom: 40px">
                            <div class="head">
                                <img style="float: left;width: 50px;height: 50px;margin-right: -100px;"
                                     src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50">
                            </div>
                            <div class="input-cmt" style="margin-left: 62px">
                                <textarea style="height: 50px;width: 100%"></textarea>
                                <div class="btn-group">
                                    <Button type="primary" size="small" style="float: right">评论</Button>
                                </div>
                            </div>

                        </div>
                        <div class="nearly-cmt">
                            <h4 class="nearly-cmt-title">最新评论</h4>
                            <div class="every-cmt" v-for="x in model.comments">
                                <div class="head">
                                    <img style="float: left;width: 50px;height: 50px;margin-right: -100px;"
                                         :src="x.user.avatarUrl"/>
                                </div>
                                <div class="every-cmt-right" style="margin-left: 60px">
                                    <a>{{x.user.nickname}}</a>：{{x.content}}
                                    <div style="margin-top: 15px;text-align: right;">
                                        <div class="timeLine">
                                            {{x.time | timeFilter}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .cover {
        float: left;
        position: relative;
        display: inline;
        margin: 0 -220px 0 0;
    }

    .cover img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .msk {
        width: 208px;
        height: 208px;
        background-position: 0 -1285px;
        border: 1px solid #d5d5d5;
        top: -4px;
        left: -4px;
        position: absolute;
    }

    .cnt {
        float: right;
        width: 100%;
    }

    .cntc {
        margin-left: 230px;
    }

    .cnt-header {
        position: relative;
        margin: 0 0 12px;
        line-height: 24px;
    }

    .cnt-title {
        margin-left: 64px;
        position: relative;
    }

    .cnt h2 {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
    }

    .cnt-user {
        margin: 0 0 20px 64px;
        line-height: 35px;
    }

    .face {
        margin-right: 10px;
        float: left;
        width: 35px;
        height: 35px;
    }

    .cnt-introduction {
        margin-top: 4px;
        margin-left: 64px;
        line-height: 18px;
        color: #666;
    }

    .list-title {
        height: 33px;
        border-bottom: 2px solid #c20c0c;
    }

    .cnt-song h3 {
        font-size: 20px;
        line-height: 28px;
        float: left;
    }

    .cnt-comment h3 {
        font-size: 20px;
        line-height: 28px;
        float: left;
    }

    .sub {
        margin: 9px 0 0 20px;
        float: left;
    }

    .input-area .head {
        float: left;
        width: 50px;
        height: 50px;
        margin-right: -100px;
    }

    .nearly-cmt-title {
        position: relative;
        top: 1px;
        height: 20px;
        border-bottom: 1px solid #cfcfcf;
    }

    .every-cmt {
        padding: 15px 0;
        height: 80px;
        border-top: 1px dotted #ccc;
    }

    .timeLine {
        float: left;
        margin: 0 !important;
    }

</style>
<script>

    import {getPlayList} from '../../fetch/api'
    import moment from 'moment'

    export default {
        data() {
            return {
                coverSrc: '',
                id: this.$route.params.id,
                title: this.$route.query.title,
                src: this.$route.query.imgSrc,
                model: {},
                musicListLength: '',
                commentLength: '',
                musicColumns: [
                    {
                        title: ' ',
                        type: "index"
                    },
                    {
                        title: '歌曲标题',
                        key: 'title'
                    },
                    {
                        title: '时长',
                        key: 'size'
                    },
                    {
                        title: '歌手',
                        key: 'singer'
                    }
                ]
            };
        },
        mounted: function () {
            let self = this;
            self.coverSrc = self.src.replace('param=140y140', 'param=200y200');
            getPlayList(self.id).then(function (res) {
                self.model = res.data;
                self.musicListLength = res.data.musicList.length;
                self.commentLength = res.data.comments.length;
            })
        },
        filters: {
            timeFilter: function (val) {
                let now = new Date().getTime();
                let diff = (now - val) / 1000;
                if (diff < 3600) {
                    return parseInt(diff / 60) + '分钟前';
                }
                else if (diff < 86400) {
                    return moment(val).format('HH:mm')
                }
                else {
                    return moment(val).format('YYYY-MM-DD HH:mm');
                }
            }
        }
    };
</script>