<template>
    <div>
        <div class="search">
            <input v-model="searchText" @keyup="search($event)" @keyup.down="searchDown()" @keyup.up="searchUp()"
                   @focus="search($event)" @blur="blurInput()">
            <button class="search-btn">百度两下</button>
            <div class="searchList" @mouseover="overLi()" @mouseout="outLi()">
                <transition-group
                        name="list" tag="ul">
                    <li v-for="(a,index) in searchResult" :class="{searchHover: searchIndex === index}"
                        @click="searchHoverText(a,index)"
                        @mouseover="hover(index)"
                        :key="index">
                        {{a}}
                    </li>
                </transition-group>
            </div>
        </div>
    </div>
</template>
<style>

    .search {
        position: absolute;
        left: 20%;
    }

    .searchList {
        position: relative;
        border: 1px solid #ccc;
        top:-1px;
        border-top: 0;
        width: 500px;
        background: #fff;
    }

    .searchList ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .searchList li {
        font-size: 14px;
        color: #000;
        padding: 0 8px 0 8px;
        cursor: default;
        line-height: 22px;
        text-align: left;
    }

    .searchHover {
        background-color: #EEEEEE;
    }

    .search input {
        height: 34px;
        width: 501px;
        font-size: 14px;
        padding-left: 7px;
    }

    .search button {
        position: relative;
        top: -1px;
        height: 34px;
        right: 5px;
        width: 100px;
        color: #fff;
        background: #3385ff;
        border: 0;
        cursor: pointer;
        font-size: 14px;
    }
</style>
<script>
    export default {
        data() {
            return {
                searchText: '',
                searchResult: [],
                searchIndex: -1,
                isActive: false
            }
        },
        methods: {
            search: function ($event) {
                if (event.keyCode === 38 || event.keyCode === 40) {  //向上向下
                    return;
                }
                this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.searchText + '&encodein=utf-8&encodeout=utf-8', {}, {}).then(function (res) {
                    this.searchResult = res.data.s;
                }, function () {
                })
            },
            searchHoverText: function (a, index) {
                this.searchText = a;
                this.searchIndex = index;
                this.searchResult = [];

            },
            searchDown: function () {
                this.searchIndex++;
                if (this.searchIndex === this.searchResult.length) {
                    this.searchIndex = 0;
                }
                this.searchText = this.searchResult[this.searchIndex];
            },
            searchUp: function () {
                this.searchIndex--;
                if (this.searchIndex === -1) {
                    this.searchIndex = this.searchResult.length - 1
                }
                this.searchText = this.searchResult[this.searchIndex];
            },
            hover: function (index) {
                this.searchIndex = index;
            },
            blurInput: function () {
                if (!this.isActive) {
                    this.searchResult = []
                }
            },
            overLi: function () {
                this.isActive = true;
            },
            outLi: function () {
                this.isActive = false;
            }
        }
    }
</script>
