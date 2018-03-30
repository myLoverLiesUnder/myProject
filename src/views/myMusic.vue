<template>
    <div class="background">
        <div class="n-pglg">
            <div class="pic">
                <h2 style="height: 100px;text-indent: -999px">登陆网易云音乐</h2>
                <a class="btn" @click="login">立即登录</a>
            </div>
        </div>
    </div>
</template>
<style>
    .n-pglg {
        width: 807px;
        height: 268px;
        margin: 0 auto 0;
        padding-top: 104px;
        background-position: 0 104px;
    }

    .n-pglg .pic {
        background: url(http://s2.music.126.net/style/web2/img/mymusic.png?9f88f01233b572d1ab616f51cbebf330);
    }

    .n-pglg .btn {
        display: block;
        width: 167px;
        height: 45px;
        margin: 102px 0 0 482px;
        background-position: 0 9999px;
        text-indent: -9999px;
    }
</style>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
            login: function () {
                this.$Modal.confirm({
                    title: '登陆',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                    },
                    onCancel: () => {
                    }
                });
            }
        }
    };
</script>