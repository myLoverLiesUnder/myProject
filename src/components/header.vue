<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="goTo">
                    <div class="layout-logo"><h1>网易云音乐</h1></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            发现音乐
                        </MenuItem>
                        <MenuItem name="2">
                            我的音乐
                        </MenuItem>
                        <MenuItem name="3">
                            朋友
                        </MenuItem>
                        <MenuItem name="4">
                            商城
                        </MenuItem>
                        <MenuItem name="5">
                            音乐人
                        </MenuItem>
                        <MenuItem name="6">
                            下载客户端
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<style>
    .layout {
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }

    .layout-logo {
        width: 176px;
        height: 69px;
        border-radius: 3px;
        float: left;
        position: relative;
        left: 20px;
    }

    .layout-logo h1 {
        color: #fff;
        font-weight: 100;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }
</style>
<script>
    export default {
        data() {
            return {};
        },
        computed: {
            activeName: {
                get: function () {
                    return this.$store.state.activeName;
                }
            }
        },
        methods: {
            goTo: function (name) {
                if (name === '1') {
                    this.$router.push({
                        path: '/findMusic',
                    })
                }
                else if (name === '2') {
                    this.$router.push({
                        path: '/myMusic'
                    })
                }
            }
        }
    };
</script>