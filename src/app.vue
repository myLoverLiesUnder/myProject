<template>
    <div>
        <headerComponent></headerComponent>
        <router-view></router-view>
        <player-component></player-component>
        <footer-component></footer-component>
    </div>
</template>
<script>
    import headerComponent from './components/header.vue'
    import footerComponent from './components/footer.vue'
    import playerComponent from './components/player.vue'


    export default {
        data() {
            return {

            };
        },
        components: {
            headerComponent,
            footerComponent,
            playerComponent
        },

        methods: {

        },

        mounted:function () {
            // 指定初始路由
            //this.$router.push('/findMusic');
        }
    };
</script>