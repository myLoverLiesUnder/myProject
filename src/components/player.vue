<template>
    <div class="g-btmbar">
        <div class="m-playbar">
            <div>

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
</style>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>