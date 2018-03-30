<template>
    <div>
        <Row :gutter="42" class="musicRow">
            <Col span="5" v-for="item in imgs" style="padding-bottom: 30px">
            <div class="imgBox">
                <img :src="item.img"/>
            </div>
            <div class="musicTitle">
                <a>{{item.title}}</a>
            </div>
            </Col>
        </Row>
    </div>
</template>
<style>
    .musicRow {
        margin: 20px 0 0 -42px;
    }

    .musicTitle {
        margin: 8px 0 3px;
        font-size: 14px;
    }

</style>
<script>
    import { getRecommendMusicImgs } from '../../../src/fetch/api'
    export default {
        data() {
            return {
                imgs:[]
            };
        },
        methods: {
        },
        mounted: function () {
            let self = this;
            getRecommendMusicImgs().then(function (res) {
                self.imgs = res.data;
            })
        }
    };
</script>