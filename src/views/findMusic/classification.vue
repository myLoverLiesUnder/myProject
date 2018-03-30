<template>
    <div class="background">
        <div class="c-content">
            <div class="c-title">
                <h3>{{classification}}
                    <Poptip placement="bottom-start" width="800">
                        <Button class="menu-btn">全部分类
                            <Icon type="chevron-down"></Icon>
                        </Button>
                        <div class="menuBox" slot="content">
                            <dl v-for="x in classifications">
                                <dt>
                                    <span>{{x.main}}</span>
                                </dt>
                                <dd>
                                    <a v-for="y in x.classification" @click="checkMusic(y.key,y.value)">{{y.value}}
                                        <span class="line">|</span></a>
                                </dd>
                            </dl>
                        </div>
                    </Poptip>
                </h3>
            </div>
            <div class="container">
                <Row type="flex" justify="space-around" class="c-musicRow">
                    <Col span="4" v-for="item in imgs">
                    <div  class="c-imgBox">
                        <img @click="gotoPlayList(item)" :src="item.img"/>
                    </div>
                    <div class="c-musicTitle">
                        <a @click="gotoPlayList(item)">{{item.title}}</a>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<style>
    .background {
        width: 980px;
        min-height: 700px;
        margin: 0 auto;
        background-color: #fff;
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
    }

    .c-content {
        padding: 40px;
    }

    .c-title {
        height: 40px;
        border-bottom: 2px solid #c20c0c;
    }

    .c-title h3 {
        float: left;
        font-size: 24px;
        font-weight: normal;
    }

    .menu-btn {
        height: 31px;
        width: 90px;
        color: #0c73c2 !important;
    }

    .menuBox {
        width: 700px;
        padding: 0 10px;
    }

    .menuBox dt {
        float: left;
        display: inline;
        width: 70px;
        margin: 0 -100px 0 26px;
        padding-top: 22px;
        font-weight: bold;
    }

    .menuBox dd {
        margin-left: 96px;
        padding: 20px 15px 0 15px;
        border-left: 1px solid #e6e6e6;
        line-height: 24px;
    }

    .container {
        margin: 30px -35px 0 -15px;
    }

    .c-musicTitle {
        width: 140px;
        margin: 8px 0 3px;
        font-size: 14px;
    }
</style>
<script>
    import {checkMusic, getClassification} from '../../fetch/api'

    export default {
        data() {
            return {
                imgs: [],
                classifications: [],
                classification: '华语'
            };
        },
        methods: {
            checkMusic: function (key, value) {
                let self = this;
                self.classification = value;
                checkMusic(key).then(function (res) {
                    self.imgs = res.data[0].data
                })
            },
            gotoPlayList: function (item) {
                this.$router.push({
                    path: '/findMusic/playList/${item.id}',
                    name: 'playListComponent',
                    params: {
                        id: item.id,
                    },
                    query:{
                        title: item.title,
                        imgSrc: item.img
                    }
                })
            }
        },
        mounted: function () {
            let self = this;
            getClassification().then(function (res) {
                self.classifications = res.data;
            });
            checkMusic('Chinese').then(function (res) {
                self.imgs = res.data[0].data
            })
        }
    };
</script>