import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import Vendors from './vendors'
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (to.name === 'recommendComponent') {
        store.state.activeName = '1';
    }else if (to.name === 'myMusicComponent'){
        store.state.activeName = '2';
    }
    store.dispatch('ActiveChange', {activeName: store.state.activeName});
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {
        activeName: '1'
    },
    getters: {},
    mutations: {
        ACTIVE_CHANGE: (state, value) => {
            state.activeName = value;
        }
    },
    actions: {
        ActiveChange: ({commit, state}, data) => {
            commit('ACTIVE_CHANGE', data.activeName)
        }
    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});